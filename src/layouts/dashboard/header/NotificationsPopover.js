import PropTypes from 'prop-types';
import {noCase} from 'change-case';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {alpha, useTheme} from '@mui/material/styles';

import {
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    IconButton,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Stack,
    Tooltip,
    Typography,
} from '@mui/material';

import {fToNow} from '../../../utils/formatTime';
// _mock_
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
import MenuPopover from '../../../components/menu-popover';
import {IconButtonAnimate} from '../../../components/animate';
import {PATH_DASHBOARD} from '../../../routes/paths';
import HomeActions from '../../../screens/dashboard/hrtech/dashboard/home/HomeActions';

// ----------------------------------------------------------------------

export default function NotificationsPopover() {
    const [openPopover, setOpenPopover] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getAllNotifications = useSelector(state => state.homeReducer.notifications) || [];
    const unReadNotification = useSelector(state => state.homeReducer.unreadNotifications);
    const _NOTIFICATIONS = unReadNotification?.map(item => ({
        id: item?.id,
        title: item?.notificationTitle,
        description: item?.notificationDescription,
        createdAt: item?.createdOn,
        isUnRead: item?.readStatus === 'N'
    }))

    const READ_NOTIFICATIONS = Array.isArray(getAllNotifications) ? getAllNotifications
        .filter(item => item?.readStatus === 'Y')
        .map(item => ({
            id: item?.id,
            title: item?.notificationTitle,
            description: item?.notificationDescription,
            createdAt: item?.createdOn,
            isUnRead: item?.readStatus === 'N'
        })) : [];


    const [notifications, setNotifications] = useState(_NOTIFICATIONS);

    const totalUnRead = _NOTIFICATIONS?.filter((item) => item.isUnRead === true)?.length || unReadNotification?.length;
    // const totalUnRead = allTasks.length;

    const handleOpenPopover = (event) => {
        setOpenPopover(event.currentTarget);
    };

    const handleClosePopover = () => {
        setOpenPopover(null);
    };

    const handleMarkAllAsRead = () => {
        setNotifications(
            notifications.map((notification) => ({
                ...notification,
                isUnRead: false,
            }))
        );
        dispatch(HomeActions.markAllAsRead())
    };

    const callback = () => {
        dispatch(HomeActions.unReadNotification());
    }

    const handleSingleNotificationAsRead = (id) => {
        dispatch(HomeActions.markSingleNotificationAsRead(id, callback))
    }

    useEffect(() => {
        dispatch(HomeActions.unReadNotification());
    }, [dispatch])

    return (
        <>
            <IconButtonAnimate
                color={openPopover ? 'primary' : 'default'}
                onClick={handleOpenPopover}
                sx={{width: 40, height: 40, mr: 2}}
            >
                <Badge badgeContent={totalUnRead} color="error">
                    <Iconify icon="eva:bell-fill"/>
                </Badge>
            </IconButtonAnimate>

            <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{width: 360, p: 0}}>
                <Box sx={{display: 'flex', alignItems: 'center', py: 2, px: 2.5}}>
                    <Box sx={{flexGrow: 1}}>
                        <Typography variant="subtitle1">Notifications</Typography>

                        <Typography variant="body2" sx={{color: 'text.secondary'}}>
                            You have {totalUnRead} unread messages
                        </Typography>
                    </Box>

                    {totalUnRead > 0 && (
                        <Tooltip title=" Mark all as read">
                            <IconButton color="primary" onClick={handleMarkAllAsRead}>
                                <Iconify icon="eva:done-all-fill"/>
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>

                <Divider sx={{borderStyle: 'dashed'}}/>

                <Scrollbar sx={{height: {xs: 340, sm: 'auto'}}}>
                    <List
                        disablePadding
                        subheader={
                            <ListSubheader disableSticky sx={{py: 1, px: 2.5, typography: 'overline'}}>
                                New
                            </ListSubheader>
                        }
                    >
                        {_NOTIFICATIONS.slice(0, 2).map((notification, index) => (
                            <NotificationItem key={index} notification={notification}
                                              handleSingleNotificationAsRead={() => handleSingleNotificationAsRead(notification?.id)}/>
                        ))}
                    </List>

                    <List
                        disablePadding
                        subheader={
                            <ListSubheader disableSticky sx={{py: 1, px: 2.5, typography: 'overline'}}>
                                Before that
                            </ListSubheader>
                        }
                    >
                        {READ_NOTIFICATIONS?.slice(0, 3)?.map((notification, index) => (
                            <NotificationItem key={index} notification={notification}
                                              handleSingleNotificationAsRead={() => console.log("readNotification")}/>
                        ))}
                    </List>
                </Scrollbar>

                <Divider sx={{borderStyle: 'dashed'}}/>

                <Box sx={{p: 1}}>
                    <Button fullWidth disableRipple onClick={() => {
                        navigate(PATH_DASHBOARD.mySpace.notificationCenter);
                        handleClosePopover();
                    }}>
                        View All
                    </Button>
                </Box>
            </MenuPopover>
        </>
    );
}

// ----------------------------------------------------------------------

NotificationItem.propTypes = {
    notification: PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.node,
        type: PropTypes.string,
        title: PropTypes.string,
        isUnRead: PropTypes.bool,
        description: PropTypes.string,
        createdAt: PropTypes.string,
    }),
    handleSingleNotificationAsRead: PropTypes.func,
};

function NotificationItem({notification, handleSingleNotificationAsRead}) {
    const {avatar, title} = renderContent(notification);
    const theme = useTheme();
    const colorarr = [alpha(theme.palette.primary.main, 0.1), alpha(theme.palette.secondary.light, 0.1), alpha(theme.palette.info.main, 0.1), alpha(theme.palette.warning.main, 0.1), alpha(theme.palette.error.main, 0.1)];
    const randomColor = (color) => {
        const index = color % 4;
        const randomChosenColour = colorarr[index];
        return randomChosenColour;
    }
    const dispatch = useDispatch();

    return (
        <ListItemButton
            sx={{
                py: 1.5,
                px: 2.5,
                mt: '1px',
                ...(notification.isUnRead && {
                    bgcolor: randomColor(notification.id),
                }),
            }}
            onClick={() => handleSingleNotificationAsRead(notification?.id)}
        >
            <ListItemAvatar>
                <Avatar sx={{bgcolor: 'background.neutral'}}>{avatar}</Avatar>
            </ListItemAvatar>

            <ListItemText
                disableTypography
                primary={title}
                secondary={
                    <Stack direction="row" sx={{mt: 0.5, typography: 'caption', color: 'text.disabled'}}>
                        <Iconify icon="eva:clock-fill" width={16} sx={{mr: 0.5}}/>
                        <Typography variant="caption">{fToNow(notification?.createdAt)}</Typography>
                    </Stack>
                }
            />
        </ListItemButton>
    );
}

// ----------------------------------------------------------------------

function renderContent(notification) {
    const title = (
        <Typography variant="subtitle2">
            {notification?.title}
            <Typography component="span" variant="body2" sx={{color: 'text.secondary'}}>
                &nbsp; {noCase(notification?.description)}
            </Typography>
        </Typography>
    );

    if (notification?.type === 'order_placed') {
        return {
            avatar: <img alt={notification?.title} src="/assets/icons/notification/ic_package.svg"/>,
            title,
        };
    }
    if (notification?.type === 'order_shipped') {
        return {
            avatar: <img alt={notification?.title} src="/assets/icons/notification/ic_shipping.svg"/>,
            title,
        };
    }
    if (notification.type === 'mail') {
        return {
            avatar: <img alt={notification.title} src="/assets/icons/notification/ic_mail.svg"/>,
            title,
        };
    }
    if (notification.type === 'chat_message') {
        return {
            avatar: <img alt={notification.title} src="/assets/icons/notification/ic_chat.svg"/>,
            title,
        };
    }
    return {
        avatar: notification.avatar ? <img alt={notification.title} src={notification.avatar}/> : null,
        title,
    };
}






































