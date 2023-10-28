import PropTypes from 'prop-types';

import {useTheme} from '@mui/material/styles';
import {AppBar, IconButton, Stack, Toolbar} from '@mui/material';

import {bgBlur} from '../../../utils/cssStyles';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';

import {HEADER} from '../../../config-global';

import Logo from '../../../components/logo';
import Iconify from '../../../components/iconify';
import {useSettingsContext} from '../../../components/settings';
//
import UserAccountPopover from "./UserAccountPopover";
// import LanguagePopover from './LanguagePopover';
// import ContactsPopover from './ContactsPopover';
// import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

HeaderUser.propTypes = {
    onOpenNav: PropTypes.func,
};

export default function HeaderUser({onOpenNav}) {
    const theme = useTheme();

    const {themeLayout} = useSettingsContext();

    const isNavHorizontal = themeLayout === 'horizontal';

    // const isNavMini = themeLayout === 'mini';

    const isDesktop = useResponsive('up', 'lg');

    const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP) && !isNavHorizontal;

    const renderContent = (
        <>
            {/* {isDesktop && isNavHorizontal && <Logo sx={{ mr: 2.5 }} />} */}
            <Logo sx={{mr: 2.5}}/>

            {!isDesktop && (
                <IconButton onClick={onOpenNav} sx={{mr: 1, color: 'text.primary'}}>
                    <Iconify icon="eva:menu-2-fill"/>
                </IconButton>
            )}

            {/* <Searchbar /> */}

            <Stack
                flexGrow={1}
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                spacing={{xs: 0.5, sm: 1.5}}
            >
                {/* <LanguagePopover />

          <NotificationsPopover />

          <ContactsPopover /> */}

                <UserAccountPopover/>
            </Stack>
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
                    // width: `calc(100% - ${NAV.W_DASHBOARD_MINI + 1}px)`,
                    height: HEADER.H_DASHBOARD_DESKTOP,
                    ...(isOffset && {
                        height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
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
