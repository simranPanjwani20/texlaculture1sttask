import * as React from 'react';
import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {alpha, styled} from '@mui/material/styles';
import {Box, Card, Divider, IconButton, MenuItem, Modal, Stack, Tooltip, Typography,} from '@mui/material';

import {PATH_AUTH, PATH_USER} from '../../../routes/paths';
// auth
import {useAuthContext} from '../../../auth/useAuthContext';

import {CustomAvatar} from '../../../components/custom-avatar';
import {useSnackbar} from '../../../components/snackbar';
import MenuPopover from '../../../components/menu-popover';
import Iconify from '../../../components/iconify/Iconify';
import Image from '../../../components/image/Image';
import img1 from '../../../images/TexlaCultureQR.png';
// ----------------------------------------------------------------------

const OPTIONS = [

    {
        label: 'Profile',
        linkTo: PATH_USER.myProfile,
    },

    {
        label: 'Applied Jobs',
        linkTo: PATH_USER.appliedJobs,
    },


    // {
    //   label: 'Settings',
    //   linkTo: PATH_DASHBOARD.user.account,
    // },

];

const StyledRoot = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    // padding: theme.spacing(2, 2.5),
    height: 60,
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    // border: '1px solid #ececec',
    border: '2px',
    borderStyle: 'solid',
    borderColor: alpha(theme.palette.grey[600], 0.12),

    backgroundColor: alpha(theme.palette.grey[100], 0.12),
    cursor: 'pointer',
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
};

// ----------------------------------------------------------------------

export default function UserAccountPopover() {
    const navigate = useNavigate();

    const {user, logout, company} = useAuthContext();

    const {pathname} = useLocation();

    const {enqueueSnackbar} = useSnackbar();

    const [openPopover, setOpenPopover] = useState(null);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const handleOpenPopover = (event) => {
        setOpenPopover(event.currentTarget);
    };

    const handleClosePopover = () => {
        setOpenPopover(null);
    };

    const handleLogout = async () => {
        try {
            logout();
            navigate(PATH_AUTH.login, {replace: true});
            handleClosePopover();
        } catch (error) {
            console.error(error);
            enqueueSnackbar('Unable to logout!', {variant: 'error'});
        }
    };

    const handleClickItem = (path) => {
        handleClosePopover();
        navigate(path);
    };
    return (
        <>
            <StyledRoot onClick={handleOpenPopover}>
                {company?.profileImage ? (
                    <Tooltip title={company?.brandName}>
                        <img
                            src={company?.profileImage}
                            alt="logo"
                            style={{objectFit: 'contain', cursor: 'pointer'}}
                            width={90}
                            height={40}
                        />
                    </Tooltip>
                ) : (
                    ''
                )}
                <Tooltip title="Your Account">
                    <CustomAvatar
                        src={user?.profileImage}
                        alt={user?.displayName}
                        name={user?.displayName}
                        sx={{cursor: 'pointer', marginRight: 2, marginLeft: company?.profileImage ? 0 : 2}}
                    />
                </Tooltip>
            </StyledRoot>

            <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{mt: -1}}>
                <Card
                    sx={{
                        px: 2,
                        backgroundColor: (theme) =>
                            alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
                    }}
                >
                    <Stack direction="row" alignItems="center">
                        <CustomAvatar
                            src={user?.profileImage}
                            alt={user?.displayName}
                            name={user?.displayName}
                        />
                        <Box sx={{my: 1, px: 2.5}}>
                            <Typography variant="subtitle2" noWrap>
                                {user?.firstName} {user?.lastName}
                            </Typography>

                            <Typography variant="body2" sx={{color: 'text.secondary'}} noWrap>
                                {user?.email}
                            </Typography>
                        </Box>
                    </Stack>
                </Card>


                <Stack sx={{p: 1}}>
                    {OPTIONS.map((option) => (
                        <MenuItem key={option.label} onClick={() => handleClickItem(option.linkTo)}>
                            {option.label}
                        </MenuItem>
                    ))}

                </Stack>

                <Divider sx={{borderStyle: 'dashed'}}/>

                <MenuItem onClick={handleLogout} sx={{m: 1}}>
                    Logout
                </MenuItem>
            </MenuPopover>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card sx={style}>
                    <IconButton onClick={handleClose}>
                        <Iconify icon="material-symbols:close"/>
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h4" align="center">
                        TexlaCulture
                    </Typography>
                    <Typography
                        id="modal-modal-description"
                        sx={{mt: 2}}
                        variant="subtitle1"
                        color="text.secondary"
                        fontWeight="light"
                        align="center"
                    >
                        WhatsApp Business Account
                    </Typography>
                    <Box sx={{width: 400}} alignItems="center">
                        <Image src={img1}/>
                    </Box>
                    <Stack alignItems="center" spacing={2}>
                        <Typography
                            id="modal-modal-description"
                            sx={{mt: 2}}
                            variant="subtitle1"
                            color="text.secondary"
                            fontWeight="light"
                        >
                            or click on the link below
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Iconify icon="logos:whatsapp-icon"/>
                            <a
                                rel="noreferrer"
                                href=" https://api.whatsapp.com/send?phone=917351912345&text=urlencodedtext"
                                target="_blank"
                            >
                                wa.me/+917351912345
                            </a>
                        </Stack>
                    </Stack>
                </Card>
            </Modal>
        </>
    );
}
