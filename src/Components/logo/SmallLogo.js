import PropTypes from 'prop-types';
import {forwardRef} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {useTheme} from '@mui/material/styles';

// import { useTheme } from '@mui/material/styles';
import {Box, Link, Stack, SvgIcon} from '@mui/material';

// ----------------------------------------------------------------------

const SmallLogo = forwardRef(({disabledLink = false, sx, ...other}, ref) => {
    const theme1 = useTheme();

    const PRIMARY_LIGHT = theme1.palette.primary.light;

    const PRIMARY_DARK = theme1.palette.primary.dark;

    const logo = (
        <Box
            ref={ref}
            component="div"
            sx={{
                // width: 160,
                // height: 60,
                display: 'inline-flex',
                objectFit: 'contain',
                ...sx,
            }}
            color="primary.main"
            {...other}
        >
            {/* <Image src="/logo/texlaCultureLogo.svg" /> */}
            <Stack>
                <SvgIcon
                    sx={{
                        width: 70,
                        height: 70,

                        backgroundColor: (theme) => theme.palette.primary,
                    }}
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024.000000 1024.000000"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g
                        transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                        fill={PRIMARY_LIGHT}
                        stroke="none"
                    >
                        <path
                            d="M0 5120 l0 -5120 5120 0 5120 0 0 5120 0 5120 -5120 0 -5120 0 0
-5120z m8120 0 l0 -3000 -3000 0 -3000 0 0 3000 0 3000 3000 0 3000 0 0 -3000z"
                        />
                        <path
                            d="M2320 5120 l0 -2800 2800 0 2800 0 0 2800 0 2800 -2800 0 -2800 0 0
-2800z m3936 35 c185 -32 342 -93 479 -185 92 -62 218 -183 213 -204 -3 -14
-280 -329 -314 -357 -11 -9 -25 -1 -71 42 -171 156 -349 226 -553 216 -310
-14 -562 -220 -652 -534 -33 -113 -32 -342 0 -457 78 -273 274 -455 552 -512
110 -22 316 -15 407 14 92 29 218 100 284 160 32 29 63 51 68 48 11 -7 251
-391 251 -403 0 -5 -19 -27 -42 -50 -125 -118 -361 -226 -593 -269 -122 -23
-382 -26 -495 -5 -505 91 -860 438 -975 954 -25 110 -31 389 -12 514 64 400
306 733 665 912 89 45 254 98 353 115 115 19 326 20 435 1z m-1628 -262 l-3
-238 -367 -3 -368 -2 0 -985 0 -985 -265 0 -265 0 0 985 0 985 -355 0 -355 0
0 240 0 240 990 0 990 0 -2 -237z"
                        />
                    </g>
                </SvgIcon>
            </Stack>
        </Box>
    );

    if (disabledLink) {
        return logo;
    }

    return (
        <Link component={RouterLink} to="/" sx={{display: 'contents'}}>
            {logo}
        </Link>
    );
});

SmallLogo.propTypes = {
    sx: PropTypes.object,
    disabledLink: PropTypes.bool,
};

export default SmallLogo;
