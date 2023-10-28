import PropTypes from 'prop-types';
import {useSelector} from "react-redux";
import {memo} from 'react';

import {useTheme} from '@mui/material/styles';
import {AppBar, Box, Toolbar} from '@mui/material';

import {HEADER} from '../../../config-global';

import {bgBlur} from '../../../utils/cssStyles';

import {NavSectionHorizontal} from '../../../components/nav-section';
import Page from "../../../components/Page";
//
import navConfig from './config-navigation';


// ----------------------------------------------------------------------

function NavHorizontal() {
    const theme = useTheme();
    const fullProfile = useSelector((state) => state.userProfileReducer.fullProfile);

    // ----------------------------------------------------- to disable nav during employee inactive
    if (fullProfile?.employeeProfile?.employmentStatus === "IN_ACTIVE") {
        return (
            <Page title="Texlaculture - HR Software, Payroll Management, Attendance Management, Recruitment Portal"/>
        )
    }
// --------------------------------------------------------

    return (
        <AppBar
            component="nav"
            color="transparent"
            sx={{
                boxShadow: 0,
                top: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
            }}
        >
            <Toolbar
                sx={{
                    ...bgBlur({
                        color: theme.palette.background.default,
                    }),
                }}
            >
                <NavSectionHorizontal data={navConfig}/>
            </Toolbar>

            <Shadow/>
        </AppBar>
    );
}

export default memo(NavHorizontal);

// ----------------------------------------------------------------------

Shadow.propTypes = {
    sx: PropTypes.object,
};

function Shadow({sx, ...other}) {
    return (
        <Box
            sx={{
                left: 0,
                right: 0,
                bottom: 0,
                height: 24,
                zIndex: -1,
                width: 1,
                m: 'auto',
                borderRadius: '50%',
                position: 'absolute',
                boxShadow: (theme) => theme.customShadows.z8,
                ...sx,
            }}
            {...other}
        />
    );
}
