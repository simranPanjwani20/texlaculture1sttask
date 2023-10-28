import {useState} from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router';
import {useSelector} from 'react-redux';

import {useTheme} from '@mui/material/styles';
import {AppBar, Box, Card, IconButton, Modal, Stack, Toolbar, Typography} from '@mui/material';

import {bgBlur} from '../../../utils/cssStyles';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';

import {HEADER, NAV} from '../../../config-global';

import Logo from '../../../components/logo';
import Iconify from '../../../components/iconify';
import {useSettingsContext} from '../../../components/settings';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import Image from '../../../components/image/Image';
import img1 from '../../../images/TexlaCultureQR2.png';

// import LanguagePopover from './LanguagePopover';
// import ContactsPopover from './ContactsPopover';
import NotificationsPopover from './NotificationsPopover';
import TaskPopover from './TaskPopover';

// ----------------------------------------------------------------------

Header.propTypes = {
    onOpenNav: PropTypes.func,
};
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
};

export default function Header({onOpenNav}) {
    const navigate = useNavigate();
    const theme = useTheme();
    const fullProfile = useSelector(state => state.userProfileReducer.fullProfile);
    const [openModal, setOpenModal] = useState(false);

    const {themeLayout} = useSettingsContext();

    const isNavHorizontal = themeLayout === 'horizontal';

    const isNavMini = themeLayout === 'mini';

    const isDesktop = useResponsive('up', 'lg');

    const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP) && !isNavHorizontal;

    const renderContent = (
        <>
            {isDesktop && isNavHorizontal && <Logo sx={{mr: 2.5}}/>}
            {!isDesktop && (
                <IconButton onClick={onOpenNav} sx={{mr: 1, color: 'text.primary'}}>
                    <Iconify icon="eva:menu-2-fill"/>
                </IconButton>
            )}

            <Searchbar/>

            {/* <VisitorCounter /> */}
            <Stack
                flexGrow={1}
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                spacing={{xs: 0.5, sm: 1.5}}
            >
                {/* <LanguagePopover /> */}
                {/* <ContactsPopover /> */}
                <Stack display="flex" flexDirection="row" alignItems="center">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    {/*
                    <a
                    target="_blank"
                    rel="noopener"
                    href="https://calendly.com/texlaculture/schedule"
                    >
                    */}
                    {/*
                    <Label
                    sx={{
                      outline: 'none',
                      height: 40,
                      ...bgBlur({
                        color: theme.palette.background.default,
                      }),
                      cursor: 'pointer',
                    }}
                    onClick={() => setOpenModal(true)}
                    color="primary"
                    variant="ghost"
                  >
                    <QrCode2Icon sx={{ mr: 0.5 }} color="primary" />
                    <div style={{ display: 'grid' }}>
                      <Typography color="primary" fontSize="0.8rem">
                        TexlaCulture{' '}
                      </Typography>
                      <Typography color="primary" fontSize="0.8rem">
                        Help Desk
                      </Typography>
                    </div>
                  </Label>
                  */}
                    {/*
                    </a>
                    */}
                    {/* <Stack
                    onClick={() => navigate(PATH_DASHBOARD.mySpace.employeeDirectory)}
                    sx={{ cursor: 'pointer' }}
                    mx={1}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                  >
                    <ContactsIcon sx={{ mr: 0.5 }} fontSize="large" color="primary" />
                    <Stack>
                      <Typography fontSize="0.8rem" color="primary">
                        Employee
                      </Typography>
                      <Typography fontSize="0.8rem" color="primary">
                        Directory
                      </Typography>
                    </Stack>
                  </Stack> */}
                    {fullProfile?.employeeProfile?.employmentStatus !== "IN_ACTIVE" &&
                        (<><TaskPopover/><NotificationsPopover/></>)
                    }
                    <AccountPopover/>
                </Stack>
            </Stack>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card sx={style}>
                    <IconButton onClick={() => setOpenModal(false)}>
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
                        Report An Issue
                    </Typography>
                    <Box sx={{width: 250}} alignItems="center">
                        <Image src={img1}/>
                    </Box>
                    <Stack alignItems="center" spacing={2}>
                        <a
                            rel="noreferrer"
                            href=" https://docs.google.com/forms/d/e/1FAIpQLSej-nb090wX1r_nuzPd7r1MVOaG9gbBFe9v40lc-AjR_9uz4g/viewform"
                            target="_blank"
                        >or Fill this form</a>
                        <Typography
                            id="modal-modal-description"
                            sx={{mt: 2}}
                            variant="subtitle1"
                            color="text.secondary"
                            fontWeight="light"
                        >
                            or click on the link below
                        </Typography>
                        {/* <Typography
                          id="modal-modal-description"
                          sx={{ mt: 0 }}
                          variant="subtitle1"
                          color="text.secondary"
                          fontWeight="light"
                        >
                          or Fill this form
                        </Typography> */}
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

    return (
        <AppBar
            sx={{
                boxShadow: 'none',
                height: HEADER.H_MOBILE,
                zIndex: theme.zIndex.appBar + 1,
                ...bgBlur({
                    color: theme.palette.background.default,
                }),
                transition: theme.transitions.create(['height'], {
                    duration: theme.transitions.duration.shorter,
                }),
                ...(isDesktop && {
                    width: `calc(100% - ${NAV.W_DASHBOARD + 1}px)`,
                    height: HEADER.H_DASHBOARD_DESKTOP,
                    ...(isOffset && {
                        height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
                    }),
                    ...(isNavHorizontal && {
                        width: 1,
                        bgcolor: 'background.default',
                        height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
                        borderBottom: `dashed 1px ${theme.palette.divider}`,
                    }),
                    ...(isNavMini && {
                        width: `calc(100% - ${NAV.W_DASHBOARD_MINI + 1}px)`,
                    }),
                }),
            }}
        >
            <Toolbar
                sx={{
                    height: 1,
                    px: {lg: 5},
                }}
            >
                {renderContent}
            </Toolbar>
        </AppBar>
    );
}
