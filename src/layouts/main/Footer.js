import {Box, Grid, Link, Stack, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {PATH_PAGE} from '../../routes/paths';
import Logo from '../../components/logo';
import Iconify from '../../components/iconify';

// ----------------------------------------------------------------------

const StyledContainer = styled('div')(({theme}) => ({
    width: '100%',
    backgroundColor: theme.palette.background.neutral,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "40px 20px",
    [theme.breakpoints.up('sm')]: {
        padding: "50px 50px",
    },
    [theme.breakpoints.up('md')]: {
        padding: "64px 100px",
    },
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    fontFamily: 'Poppins',
    fontWeight: '500',
}));

const StyledLink = styled('a')(({theme}) => ({
    height: "min-content",
    fontSize: '13px',
    color:"black",
    textDecoration: 'none',
    cursor: 'pointer',
    "&:hover": {
        color: theme.palette.text.primary,
    }
}));

const StyledHeadLink = styled('a')(({theme}) => ({
    height: "min-content",
    // fontSize: '21px',
    fontWeight: 'bold',
    fontStyle: 'underline',
    textDecoration: 'none',
    cursor: 'pointer',
    color: theme.palette.text.primary,
}));

export default function Footer() {

    return (
        <StyledContainer>
            <Grid container item direction="row" gap={6} justifyContent={{sm: "center", md: "space-between"}}>
                <Grid item sm={12} alignItems="center">
                    <Box
                        rowGap={3}
                        columnGap={2}
                        display="grid"
                        gridTemplateColumns={{
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: "repeat(3,1fr)",
                            lg: "repeat(4,1fr)"
                        }}>
                        <Logo/>
                        <Stack direction="row" gap={1}>
                            <StyledTypography variant="h6" sx={{color: "text.primary"}}>Connect with
                                us</StyledTypography>
                            <Link rel="noreferrer"
                                  href="https://in.linkedin.com/company/texlaculture"
                                  target="_blank">
                                <Iconify sx={{width: {xs: "30px", sm: "45px"}}} icon="ion:logo-linkedin"/>
                            </Link>
                            {/*  <Link rel="noreferrer"
                                  href="https://in.linkedin.com/company/texlaculture"
                                  target="_blank">
                              <Iconify sx={{width:{xs: "30px", sm: "45px"}}} icon="bi:instagram" />
                            </Link> */}
                        </Stack>
                        <Box>
                            {[{Icon: "material-symbols:mail", title: "ck@texlaculture.com"}, {
                                Icon: "ic:baseline-phone",
                                title: "+917351912345"
                            }].map((pr, index) => (
                                <Stack direction="row" key={index} columnGap={2} rowGap={2}>
                                    <Iconify icon={pr.Icon} color="primary.main"/>
                                    <StyledTypography variant="h6"
                                                      sx={{color: "text.primary"}}>{pr.title}</StyledTypography>
                                </Stack>
                            ))}
                        </Box>
                        <Box>
                            <Stack direction="row" gap={{xs: 3, sm: 5}} alignItems="center">
                                <Link rel="noreferrer"
                                      href="https://play.google.com/store/apps/details?id=com.texlaculture"
                                      target="_blank">
                                    <Iconify width="55px" icon="ion:logo-google-playstore"/>
                                </Link>
                                <Link rel="noreferrer"
                                      href="https://apps.apple.com/in/app/texlaculture/id6449791187"
                                      target="_blank">
                                    <Iconify width="55px" icon="cib:app-store-ios"/>
                                </Link>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sm={10} md={5} lg={2}>
                    <Stack direction="column" gap={2} alignItems="start">
                        <StyledHeadLink href={PATH_PAGE.coreHrms}>Core HR</StyledHeadLink>
                        <StyledLink href={PATH_PAGE.essPortal}>Employee Management</StyledLink>
                        <StyledLink href={PATH_PAGE.employeeProfiles}>Employee Self
                            Service</StyledLink>
                        <StyledLink href={PATH_PAGE.employeeDocuments}>Document
                            Management</StyledLink>
                        <StyledLink href={PATH_PAGE.companyPolicy}>Policy Management</StyledLink>
                        <StyledLink href={PATH_PAGE.hrAnalytics}>HR Analytics</StyledLink>
                        {/*  <StyledLink onClick={() => navigate(PATH_PAGE.rewardsRecognition)}>Rewards & Recognition</StyledLink> */}
                        <StyledLink href={PATH_PAGE.helpdesk}>HelpDesk</StyledLink>
                        {/* <StyledLink onClick={() => navigate(PATH_PAGE.coreHrms)}>Why choose us</StyledLink> */}
                    </Stack>
                </Grid>
                <Grid item sm={10} md={5} lg={2} alignItems="start">
                    <Stack direction="column" gap={2}>
                        <StyledHeadLink href={PATH_PAGE.payroll}>Payroll</StyledHeadLink>
                        <StyledLink href={PATH_PAGE.payrollCompliance}>Compliance</StyledLink>
                        <StyledLink href={PATH_PAGE.compensation}>Compensation</StyledLink>
                        <StyledLink href={PATH_PAGE.expenseManagement}>Expense
                            Management</StyledLink>
                        <StyledLink href={PATH_PAGE.loanAdvances}>Loans & Advances</StyledLink>
                        <StyledLink href={PATH_PAGE.taxFinance}>Tax & Finance</StyledLink>
                    </Stack>
                </Grid>
                <Grid item sm={10} md={5} lg={2}>
                    <Stack direction="column" gap={2} alignItems="start">
                        <StyledHeadLink href={PATH_PAGE.attendance}>Time & Attendance</StyledHeadLink>
                        <StyledLink href={PATH_PAGE.leaves}>Leave Management</StyledLink>
                        <StyledLink href={PATH_PAGE.shiftManagement}>Shift Management</StyledLink>
                        <StyledLink href={PATH_PAGE.mobileAttendance}>Mobile/GPS
                            Attendance</StyledLink>
                    </Stack>
                </Grid>
                <Grid item sm={10} md={5} lg={2} alignItems="end">
                    <Stack direction="column" gap={2}>
                        <StyledHeadLink href={PATH_PAGE.hiring}>Hiring Software</StyledHeadLink>
                        <StyledLink href={PATH_PAGE.applicantTracking}>Applicant
                            Tracking</StyledLink>
                        <StyledLink href={PATH_PAGE.jobPosting}>Job Posting</StyledLink>
                        <StyledLink href={PATH_PAGE.onboarding}>Employee Onboarding</StyledLink>
                    </Stack>
                    <Stack direction="column" gap={2} mt={3}>
                        <StyledHeadLink href={PATH_PAGE.pms}>Performance management</StyledHeadLink>
                    </Stack>
                </Grid>
                <Grid item sm={10} md={5} lg={3}>
                    <StyledLink >TexlaCulture Copyrights 2023</StyledLink>
                </Grid>
                <Grid item sm={10} md={5} lg={2}>
                    <StyledLink href={PATH_PAGE.termsAndConditions}>Terms & Condition</StyledLink>
                </Grid>
                <Grid item sm={10} md={5} lg={2}>
                    <StyledLink href={PATH_PAGE.eula}>User License Agreement</StyledLink>
                </Grid>
                <Grid item sm={10} md={5} lg={1}>
                    <StyledLink href={PATH_PAGE.about}>About</StyledLink>
                </Grid>
                <Grid item sm={10} md={5} lg={2}>
                    <StyledLink href={PATH_PAGE.contact}>Contact Us</StyledLink>
                </Grid>
            </Grid>
        </StyledContainer>
    );
}
