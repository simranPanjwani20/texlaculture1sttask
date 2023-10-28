import React from 'react';
import PropTypes from "prop-types";

import {Box, Button, Grid, Stack, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
// hooks
import useResponsive from '../../hooks/useResponsive';

// ----------------- STYLED COMPONENTS -------------------
const StyledRoot = styled('div')(({theme}) => ({
    position: 'relative',
    width: '100%',
    padding: "40px 20px",
    [theme.breakpoints.up('sm')]: {
        padding: "30px 50px",
    },
    [theme.breakpoints.up('md')]: {
        padding: "50px 100px",
    },
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    fontFamily: 'inherit',
    fontWeight: '500',
}));
const StyledTypographySmall = styled(Typography)(({theme}) => ({
    fontFamily: 'inherit',
    fontWeight: '600',
    fontSize: '32px'
}));

// ---------------------- MAIN COMPONENT -------------------------------
WebsiteHeroHead.propTypes = {
    data: PropTypes.object,
};

export default function WebsiteHeroHead({data}) {
    return (
        <StyledRoot>
            <Grid container height={{md: "100%", lg: "90%"}} gap={{sm: 10, lg: 0}}>
                <Grid container item gap={{lg: 8, xl: 5}} justifyContent="space-between" flexDirection='column'>
                    <Description heading={data}/>
                    <StyledTypographySmall variant="h3" sx={{textAlign: 'center', mt: 2}}>
                        TexlaCulture – the
                        <Box component='span' sx={{color: 'primary.main'}}> choice </Box>
                        <Box component='span'>of </Box><br/>
                        <Box component='span' sx={{color: 'primary.main'}}>modern HR</Box> professionals.
                    </StyledTypographySmall>
                </Grid>
            </Grid>
        </StyledRoot>
    )
};

Description.propTypes = {
    heading: PropTypes.object,
};

function Description({heading}) {
    const isDesktop = useResponsive('up', 'lg');
    return (
        <>
            <Grid container flexDirection='column' justifyContent='center' gap={6}>
                <Grid container direction='column' justifyContent='center' gap={3}>
                    <Grid item lg={12} md={6} xs={3} direction="column" justifyContent="center">
                        <StyledTypography variant="h2" sx={{textAlign: 'center'}}>
                            {heading?.title}
                            {/* <Box component='span'> Policy Management: Directly Contact Your </Box>
                            <Box component='span' sx={{color: 'warning.main'}}> HR </Box>
                            <Box component='span'>with </Box>
                            <Box component='span' sx={{color: 'error.main'}}>TexlaCulture</Box> */}
                        </StyledTypography>
                        <Stack direction="row" justifyContent="center" alignItems="center" alignSelf="center">
                            {/*   <StyledTypographyNormal>
                            Experience HR management excellence with Nucleus HR by TexlaCulture,
                            designed to meet the unique needs of today&apos;s HR leaders.
                        </StyledTypographyNormal> */}
                            <Button
                                color="secondary"
                                size="large"
                                variant="contained"
                                target="_blank"
                                rel="noopener"
                                href="https://calendly.com/texlaculture/demo"
                                sx={{
                                    fontFamily: 'inherit',
                                    fontWeight: '500',
                                    boxShadow: "0px 4px 8px 0px #00000029",
                                    mt: 3
                                }}>
                                Schedule a demo
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>

                {isDesktop ? (
                    <Grid sx={{position: 'relative', margin: 'auto'}}>
                        <Box
                            sx={{position: 'absolute', top: '-100px', left: '-140px', width: '220px', height: '220px'}}>
                            <Box
                                component="img"
                                src="/assets/jobOffersHome/avatar4.svg" alt="icon"
                                sx={{position: 'absolute', top: '-43px', right: '30px', width: '110px'}}
                            />
                            <Box
                                component="img"
                                src="/assets/coreHRMS/circle.svg" alt="icon"
                                sx={{position: 'absolute', top: '0', left: '0', width: '177px'}}
                            />
                            <Box
                                component="img"
                                src="/assets/jobOffersHome/avatar5.svg" alt="icon"
                                sx={{position: 'absolute', top: '61px', left: '-40px', width: '110px'}}
                            />
                        </Box>
                        <Box sx={{position: 'absolute', bottom: '160px', left: '0px', width: '90px', height: '90px'}}>
                            <Box
                                component="img"
                                src="/assets/jobOffersHome/avatar1Container.svg" alt="icon"
                                sx={{position: 'absolute', top: '0', left: '-110px', width: '90px'}}
                            />
                            <Box
                                component="img"
                                src="/assets/jobOffersHome/avatar1.gif" alt="icon"
                                sx={{position: 'absolute', top: '10px', left: '-100px', width: '63px'}}
                            />
                        </Box>
                        <Box
                            component="img"
                            src="/assets/coreHRMS/coreHead.png" alt="icon"
                            sx={{width: '100%', maxWidth: '900px', margin: 'auto'}}
                        />
                        <Grid sx={{
                            position: 'absolute',
                            top: '0',
                            right: '-176px',
                            width: '200px',
                            height: '200px',
                            zIndex: '2'
                        }}>
                            <Box
                                component="img"
                                src="/assets/jobOffersHome/avatar3.gif" alt="icon"
                                sx={{position: 'absolute', top: '0', left: '0', width: '80px'}}
                            />
                            <Box
                                component="img"
                                src="/assets/jobOffersHome/joinnerAvatar2-3.svg" alt="icon"
                                sx={{
                                    position: 'absolute',
                                    top: '66px',
                                    right: '-22px',
                                    width: '200px',
                                    transform: 'rotate(270deg)'
                                }}
                            />
                            <Box
                                component="img"
                                src="/assets/jobOffersHome/avatar2.gif" alt="icon"
                                sx={{position: 'absolute', top: '-19px', left: '117px', width: '63px', zIndex: '1'}}
                            />
                            <Box
                                component="img"
                                src="/assets/jobOffersHome/avatar2Container.svg" alt="icon"
                                sx={{position: 'absolute', top: '-30px', left: '103px', width: '90px'}}
                            />
                        </Grid>
                    </Grid>
                ) : (
                    <Box
                        component="img"
                        src="/assets/coreHRMS/coreHead.png" alt="ic"
                        sx={{width: '100%', maxWidth: '900px', margin: 'auto'}}
                    />
                )}
            </Grid>
        </>
    );
}
