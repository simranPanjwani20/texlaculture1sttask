import PropTypes from 'prop-types';
import {Box, Grid, Stack, Typography} from '@mui/material';

import {alpha, styled} from '@mui/material/styles';
import {m, useScroll} from 'framer-motion';
import * as React from 'react';
import {useState} from 'react';
import {varFade} from '../animate';
// hooks
import useResponsive from '../../hooks/useResponsive';
import img from '../../images/CoreHRMS.png';

import {bgGradient} from '../../utils/cssStyles';

// ----------------------------------------------------------------------

const StyledContainer = styled('div')(({theme}) => ({
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "40px 20px",
    overflow: 'hidden',
    zIndex: 1,
    ...bgGradient({
        startColor: theme.palette.background.paper,
        endColor: alpha(theme.palette.primary.main, 0.2),
    }),
    [theme.breakpoints.up('sm')]: {
        padding: "50px 50px",
    },
    [theme.breakpoints.up('md')]: {
        padding: "20px 100px",
        paddingBottom: "40px",
    },
}));

const StyledContainerWithGradient = styled('div')(({theme}) => ({
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "40px 20px",
    overflow: 'hidden',
    zIndex: 1,
    ...bgGradient({
        startColor: `${alpha(theme.palette.primary.main, 0.2)} 0%`,
        endColor: `${theme.palette.background.paper} 20%`,
    }),
    [theme.breakpoints.up('sm')]: {
        padding: "50px 50px",
    },
    [theme.breakpoints.up('md')]: {
        padding: "20px 100px",
        paddingBottom: "40px",
    },
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins',
    fontWeight: '400',
}));


// ----------------------------------------------------------------------
WebsiteHero.propTypes = {
    SectionData: PropTypes.array,
};

export default function WebsiteHero({SectionData}) {
    const {scrollYProgress} = useScroll();
    const [hide, setHide] = useState(false);

    return (
        <>
            <StyledContainerWithGradient>
                <Grid container height={{md: "100%", lg: "90%"}} gap={{sm: 10, lg: 0}} sx={{mb: 10}}>
                    <Grid container item gap={15} justifyContent="space-between" flexDirection='column'>
                        <Box
                            component="img"
                            src="/assets/coreHRMS/shade1.svg" alt="icon"
                            sx={{position: 'absolute', top: '0', right: '0'}}
                        />
                        <Box
                            component="img"
                            src="/assets/coreHRMS/shadecircle2.svg" alt="icon"
                            sx={{position: 'absolute', top: '30.3%', right: '-62px', width: '250px'}}
                        />
                        {SectionData.map((pr, index) => (
                            <Description data={pr} index={index}/>
                        ))}
                        <Box
                            component="img"
                            src="/assets/coreHRMS/shadecircle1.svg" alt="icon"
                            sx={{position: 'absolute', top: '48.3%', left: '-62px', width: '250px'}}
                        />
                        <Box
                            component="img"
                            src="/assets/coreHRMS/shade2.svg" alt="icon"
                            sx={{position: 'absolute', top: '25%', left: '0'}}
                        />
                    </Grid>
                </Grid>
            </StyledContainerWithGradient>
        </>
    );
}

//-----------------------------------------------------------------------

Description.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number
};

function Description({data, index}) {
    const isDesktop = useResponsive('up', 'md');
    return (
        <Grid
            container
            direction={index % 2 === 0 ? "row-reverse" : "row"}
            spacing={isDesktop ? 13 : 4}
            alignItems="center"
            sx={{zIndex: 1}}
        >
            <Grid item xs={12} md={6}>
                <img src={data.img} alt="logo" width={data?.width} height={data?.height}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack alignItems="left" spacing={2}>
                    <m.div variants={varFade().in}>
                        <StyledTypography variant="h3" sx={{textAlign: 'left', color: 'primary.main', fontWeight: 600}}>
                            {data?.description}
                        </StyledTypography>
                    </m.div>
                    <m.div variants={varFade().in}>
                        <StyledTypography sx={{
                            textAlign: 'left', mt: 0.8,
                            color: 'var(--greys-grey-700, #454F5B)',
                            fontSize: "16px"
                        }}>
                            {data.description2}
                        </StyledTypography>
                    </m.div>
                    {/*  <m.div variants={varFade().in}>
                        <Button variant="outlined">Learn More</Button>
                    </m.div> */}
                </Stack>
            </Grid>
        </Grid>
    );
}
