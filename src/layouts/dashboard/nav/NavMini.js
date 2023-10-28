import {Box, Stack} from '@mui/material';
import {useTheme} from '@mui/material/styles';

import {NAV} from '../../../config-global';

import {hideScrollbarX} from '../../../utils/cssStyles';

import {NavSectionMini} from '../../../components/nav-section';
//
import navConfig from './config-navigation';
import NavToggleButton from './NavToggleButton';

// ----------------------------------------------------------------------

export default function NavMini() {
    const theme1 = useTheme();

    const PRIMARY_LIGHT = theme1.palette.primary.light;
    const PRIMARY_MAIN = theme1.palette.primary.main;
    const PRIMARY_DARK = theme1.palette.primary.dark;
    return (
        <Box
            component="nav"
            sx={{
                flexShrink: {lg: 0},
                width: {lg: NAV.W_DASHBOARD_MINI},
            }}
        >
            <NavToggleButton
                sx={{
                    top: 22,
                    left: NAV.W_DASHBOARD_MINI - 12,
                }}
            />

            <Stack
                sx={{
                    pb: 2,
                    height: 1,
                    position: 'fixed',
                    width: NAV.W_DASHBOARD_MINI,
                    borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
                    ...hideScrollbarX,
                }}
            >
                <Stack sx={{my: 2, mx: 2}}>
                    <svg width="190" height="75" viewBox="0 0 190 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="47" height="47" rx="3" fill={PRIMARY_MAIN}/>
                        <path
                            d="M11.48 34V19.8933H5.82667V15.3333H22.6V19.8933H16.76V34H11.48ZM33.7502 34.2667C32.2924 34.2667 30.9502 34.0267 29.7235 33.5467C28.4969 33.0667 27.4302 32.4 26.5235 31.5467C25.6347 30.6756 24.9413 29.6533 24.4435 28.48C23.9635 27.2889 23.7235 25.9822 23.7235 24.56C23.7235 23.1556 23.9724 21.8667 24.4702 20.6933C24.9858 19.5022 25.6969 18.4711 26.6035 17.6C27.5102 16.7289 28.5858 16.0533 29.8302 15.5733C31.0747 15.0933 32.4347 14.8533 33.9102 14.8533C34.7991 14.8533 35.6613 14.9689 36.4969 15.2C37.3502 15.4133 38.1502 15.7333 38.8969 16.16C39.6435 16.5867 40.3102 17.12 40.8969 17.76L37.7235 21.44C37.4213 21.1022 37.0835 20.8 36.7102 20.5333C36.3369 20.2667 35.9102 20.0622 35.4302 19.92C34.968 19.76 34.4524 19.68 33.8835 19.68C33.2258 19.68 32.6035 19.7956 32.0169 20.0267C31.448 20.24 30.9502 20.56 30.5235 20.9867C30.0969 21.4133 29.7591 21.9289 29.5102 22.5333C29.2791 23.1378 29.1635 23.8311 29.1635 24.6133C29.1635 25.36 29.2791 26.0356 29.5102 26.64C29.7591 27.2267 30.1058 27.7333 30.5502 28.16C31.0124 28.5689 31.5547 28.8889 32.1769 29.12C32.8169 29.3511 33.528 29.4667 34.3102 29.4667C34.8613 29.4667 35.3769 29.3867 35.8569 29.2267C36.3547 29.0667 36.808 28.8533 37.2169 28.5867C37.6258 28.32 37.9902 28.0267 38.3102 27.7067L40.8169 31.68C40.3724 32.1778 39.768 32.6222 39.0035 33.0133C38.2569 33.4044 37.4213 33.7156 36.4969 33.9467C35.5902 34.16 34.6747 34.2667 33.7502 34.2667Z"
                            fill="white"/>

                    </svg>
                </Stack>
                <NavSectionMini data={navConfig}/>
            </Stack>
        </Box>
    );
}
