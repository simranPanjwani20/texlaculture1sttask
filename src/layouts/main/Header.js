import PropTypes from 'prop-types';
import {useRef} from 'react';

import {styled, useTheme} from '@mui/material/styles';
import {AppBar, Box, Button, Stack, Toolbar} from '@mui/material';
// hooks
import {Link as RouterLink} from 'react-router-dom';
import useOffSetTop from '../../hooks/useOffSetTop';
import useResponsive from '../../hooks/useResponsive';

import {bgBlur} from '../../utils/cssStyles';

import {HEADER} from '../../config-global';

import {PATH_USER} from '../../routes/paths';

import Logo from '../../components/logo';
//
import navConfig from './nav/config-navigation';
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';

// ----------------------------------------------------------------------

const StyledContainer = styled('div')(({theme}) => ({
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    gap: "10px",
    padding: "40px 20px",
    [theme.breakpoints.up('sm')]: {
        padding: "50px 50px",
        gap: "25px",
    },
    [theme.breakpoints.up('md')]: {
        padding: "64px 100px",
        gap: "40px",
    },
}));


export default function Header() {
    const carouselRef = useRef(null);

    const theme = useTheme();

    const isDesktop = useResponsive('up', 'md');
    const isMobile = useResponsive('down', 'sm');

    const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

    // return (
    //   <AppBar ref={carouselRef} color="transparent" sx={{ boxShadow: 0 }}>
    //     <Toolbar
    //       disableGutters
    //       sx={{
    //         height: {
    //           xs: HEADER.H_MOBILE_SMALL,
    //           md: HEADER.H_MAIN_DESKTOP,
    //         },
    //         transition: theme.transitions.create(['height', 'background-color'], {
    //           easing: theme.transitions.easing.easeInOut,
    //           duration: theme.transitions.duration.shorter,
    //         }),
    //         ...(isOffset && {
    //           ...bgBlur({ color: theme.palette.background.default }),
    //           height: {
    //             md: HEADER.H_MAIN_DESKTOP - 16,
    //           },
    //         }),
    //       }}
    //     >
    //       <Container sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
    //         <Logo />

    //         {/* <Link
    //           href={PATH_DOCS.changelog}
    //           target="_blank"
    //           rel="noopener"
    //           underline="none"
    //           sx={{ ml: 1 }}
    //         >
    //           <Label color="info"> v4.1.0 </Label>
    //         </Link> */}

    //         <Box sx={{ flexGrow: 1 }} />

    //         {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig} />}

    //         <Button
    //           variant="contained"
    //           target="_self"
    //           rel="noopener"
    //           component={RouterLink}
    //           to={PATH_USER.root}
    //         >
    //           Log In
    //         </Button>

    //         {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig} />}
    //       </Container>
    //     </Toolbar>

    //     {isOffset && <Shadow />}
    //   </AppBar>
    // );

    return (
        <AppBar ref={carouselRef} color="transparent" sx={{boxShadow: 0}}>
            <Toolbar
                disableGutters
                sx={{
                    height: {
                        xs: HEADER.H_MOBILE_SMALL,
                        md: HEADER.H_MAIN_DESKTOP,
                    },
                    transition: theme.transitions.create(['height', 'background-color'], {
                        easing: theme.transitions.easing.easeInOut,
                        duration: theme.transitions.duration.shorter,
                    }),
                    ...(isOffset && {
                        ...bgBlur({color: theme.palette.background.default}),
                        height: {
                            md: HEADER.H_MAIN_DESKTOP - 16,
                        },
                    }),
                }}
            >
                {/* <Container maxWidth="xl" sx={{ height: 1, display: 'flex', alignItems: 'center', gap: {xs: 2, sm: 5} }}> */}
                <StyledContainer>
                    <Logo/>

                    {/* <Link
                        href={PATH_DOCS.changelog}
                        target="_blank"
                        rel="noopener"
                        underline="none"
                        sx={{ ml: 1 }}
                      >
                        <Label color="info"> v4.1.0 </Label>
                      </Link> */}


                    {isDesktop && <NavDesktop isOffset={isOffset} data={navConfig}/>}

                    {/* {!isMobile && <Box sx={{ flexGrow: 1 }} /> } */}
                    <Box sx={{flexGrow: 1}}/>
                    <Stack direction="row" gap={3}>
                        <Button
                            size={isMobile ? 'small' : 'medium'}
                            variant="outlined"
                            sx={{fontFamily: 'Poppins', fontWeight: '500'}}
                            target="_blank"
                            rel="noopener"
                            href="https://calendly.com/texlaculture/demo"
                        >
                            Demo
                        </Button>

                        <Button
                            size={isMobile ? 'small' : 'medium'}
                            variant="contained"
                            sx={{fontFamily: 'Poppins', fontWeight: '500'}}
                            target="_self"
                            rel="noopener"
                            component={RouterLink}
                            to={PATH_USER.root}
                        >
                            Log In
                        </Button>

                    </Stack>
                    {!isDesktop && <NavMobile isOffset={isOffset} data={navConfig}/>}
                </StyledContainer>
            </Toolbar>

            {isOffset && <Shadow/>}
        </AppBar>
    );
}

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
                m: 'auto',
                borderRadius: '50%',
                position: 'absolute',
                width: `calc(100% - 48px)`,
                boxShadow: (theme) => theme.customShadows.z8,
                ...sx,
            }}
            {...other}
        />
    );
}
