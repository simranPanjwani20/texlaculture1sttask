import PropTypes from 'prop-types';
import {noCase} from 'change-case';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router';

import {
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    ListSubheader,
    Stack,
    Typography,
} from '@mui/material';

import {convertToDateString, fToNow} from '../../../utils/formatTime';
// _mock_
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
import MenuPopover from '../../../components/menu-popover';
import {IconButtonAnimate} from '../../../components/animate';
import MyTaskActions from '../../../screens/dashboard/hrtech/dashboard/mySpace/myTasks/MyTasksActions';
import UtilityService from '../../../services/UtilityService';
import {PATH_DASHBOARD} from '../../../routes/paths';
import EmployeesListActions
    from '../../../screens/dashboard/hrtech/dashboard/management/employees/list/EmployeesListActions';
import UserProfileActions from '../../../screens/dashboard/hrtech/dashboard/mySpace/profile/UserProfileActions';
import LeavesActions from '../../../screens/dashboard/hrtech/dashboard/mySpace/leaves/LeavesActions';

// ----------------------------------------------------------------------

export default function TaskPopover() {
    const [openPopover, setOpenPopover] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const allTasks = useSelector((state) => state.tasksReducer.tasks);
    const taskCount = useSelector((state) => state.tasksReducer.taskCount);
    const pendingSeparationTasks = useSelector((state) => state.tasksReducer.separationTasks);
    const separationTasksWithdraw = useSelector(state => state.tasksReducer.separationTasksWithdraw);
    const abscondingTasks = useSelector((state) => state.tasksReducer.abscondingTasks);
    const transferTasks = useSelector((state) => state.tasksReducer.transferTasks);
    const loadPendingExpenses = useSelector((state) => state.tasksReducer.loadPendingExpense);
    const pendingJobOfferDetails = useSelector(state => state.tasksReducer.loadPendingJobOffer);

    const [notifications, setNotifications] = useState(allTasks.map((item, index) => ({
        avatar: item.employeeName,
        createdAt: item.startDate && convertToDateString(item?.startDate?.slice(11, 19)),
        title: item.employeeName,
        description: item.taskCategory && UtilityService.replaceUnderscore(item?.taskCategory)?.toLowerCase(),
        type: item.taskCategory,
        id: index
    })));

    useEffect(() => {
        dispatch(LeavesActions.loadLeaveBalance());
        dispatch(EmployeesListActions.loadEmployees());
        dispatch(UserProfileActions.loadMyProfile())
        dispatch(MyTaskActions.loadTaskCount());
        // dispatch(MyTaskActions.loadSeparationWithdrawTasks({
        //     regularizationStatus: 'PENDING',
        //     companyTaskType: 'SERVING_NOTICE_PERIOD_WITHDRAW'
        // }))
        // dispatch(MyTaskActions.loadSeparationTasks({
        //     regularizationStatus: 'PENDING',
        //     companyTaskType: 'SERVING_NOTICE_PERIOD'
        // }))
        // dispatch(MyTaskActions.loadAbscondingTasks({regularizationStatus: 'PENDING'}));
        // dispatch(MyTaskActions.loadTransferTasks({regularizationStatus: 'PENDING'}))
        // dispatch(MyTaskActions.loadPendingExpenses())
        // dispatch(MyTaskActions.loadPendingJobOffers({status: 'PENDING'}))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const totalUnRead = allTasks?.concat(pendingSeparationTasks)?.concat(abscondingTasks)?.concat(separationTasksWithdraw)?.concat(transferTasks)?.concat(loadPendingExpenses)?.concat(pendingJobOfferDetails)?.length;
    // console.log("totalUnRead", allTasks?.map((item, index)=>({
    //   avatar: item?.employeeName,
    //   createdAt: item?.startDate && convertToDateString(item?.startDate?.slice(11, 19)),
    //   title: item?.employeeName,
    //   description: item?.employeeDesignation,
    //   type: item?.taskTopic,
    //   id: index
    // })))

    const handleOpenPopover = (event) => {
        setOpenPopover(event.currentTarget);
    };

    const handleClosePopover = () => {
        setOpenPopover(null);
    };

    const handleMarkAllAsRead = () => {
        setNotifications(
            notifications?.map((notification) => ({
                ...notification,
                isUnRead: false,
            }))
        );
    };

    return (
        <>
            <IconButtonAnimate
                color={openPopover ? 'primary' : 'default'}
                // onClick={handleOpenPopover}
                onClick={() => navigate(PATH_DASHBOARD.mySpace.myTasks)}
                sx={{width: 40, height: 40, mr: 2}}
            >
                <Badge badgeContent={taskCount} color="error">
                    <Iconify icon="vaadin:tasks"/>
                </Badge>
            </IconButtonAnimate>

            <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{width: 360, p: 0}}>
                {/* <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1">Notifications</Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    You have {totalUnRead} unread messages
                  </Typography>
                </Box>

                {totalUnRead > 0 && (
                  <Tooltip title=" Mark all as read">
                    <IconButton color="primary" onClick={handleMarkAllAsRead}>
                      <Iconify icon="eva:done-all-fill" />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>

              <Divider sx={{ borderStyle: 'dashed' }} /> */}

                <Scrollbar sx={{height: {xs: 340, sm: 'auto'}}}>
                    <List
                        disablePadding
                        subheader={
                            <ListSubheader disableSticky sx={{py: 1, px: 2.5, typography: 'overline'}}>
                                New
                            </ListSubheader>
                        }
                    >
                        {notifications.slice(0, 2).map((notification) => (
                            <NotificationItem key={notification.id} notification={notification}/>
                        ))}
                    </List>

                    {/* <List
                      disablePadding
                      subheader={
                        <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: 'overline' }}>
                          Before that
                        </ListSubheader>
                      }
                    >
                      {notifications.slice(2, 5).map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                      ))}
                    </List> */}
                </Scrollbar>
                <Divider sx={{borderStyle: 'dashed'}}/>
                <Box sx={{p: 1}}>
                    <Button fullWidth disableRipple onClick={() => {
                        navigate(PATH_DASHBOARD.mySpace.myTasks);
                        setOpenPopover(false)
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
        id: PropTypes.string,
        avatar: PropTypes.node,
        type: PropTypes.string,
        title: PropTypes.string,
        isUnRead: PropTypes.bool,
        description: PropTypes.string,
        createdAt: PropTypes.instanceOf(Date),
    }),
};

function NotificationItem({notification}) {
    const {avatar, title} = renderContent(notification);
    console.log("notasdfasification", notification)

    return (
        <ListItemButton
            sx={{
                py: 1.5,
                px: 2.5,
                mt: '1px',
                ...(notification.isUnRead && {
                    bgcolor: 'action.selected',
                }),
            }}
        >
            <ListItemAvatar>
                {/* <Avatar sx={{ bgcolor: 'background.neutral' }}>{avatar}</Avatar> */}
                <Avatar sx={{bgcolor: 'background.neutral'}} name={avatar}/>
            </ListItemAvatar>
            <ListItemText
                disableTypography
                primary={title}
                secondary={
                    <Stack direction="row" sx={{mt: 0.5, typography: 'caption', color: 'text.disabled'}}>
                        <Iconify icon="eva:clock-fill" width={16} sx={{mr: 0.5}}/>
                        <Typography variant="caption">{fToNow(notification.createdAt)}</Typography>
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
            {notification.title}
            <Typography component="span" variant="body2" sx={{color: 'text.secondary'}}>
                &nbsp; {noCase(notification.description)}
            </Typography>
        </Typography>
    );

    if (notification.type === 'order_placed') {
        return {
            avatar: <img alt={notification.title} src="/assets/icons/notification/ic_package.svg"/>,
            title,
        };
    }
    if (notification.type === 'order_shipped') {
        return {
            avatar: <img alt={notification.title} src="/assets/icons/notification/ic_shipping.svg"/>,
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
