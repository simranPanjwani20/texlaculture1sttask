import PropTypes from 'prop-types';
import {Avatar, Card, Grid, Stack, Typography} from '@mui/material';
import {alpha, styled} from '@mui/material/styles';

import Label from '../label';
import UtilityService from '../../services/UtilityService';

const StyledBg = styled('div')(({theme}) => ({
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    position: 'absolute',
    '&:before': {
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -2,
        content: '""',
        opacity: 0.2,
        //   ...bgGradient({
        //     direction: '135deg',
        //     startColor: theme.palette.primary.light,
        //     endColor: theme.palette.primary.dark,
        //   }),
    },
}));

MyInformationCard.propTypes = {
    data: PropTypes.object,
};
export default function MyInformationCard({data}) {
    const LeftGridData = [
        {
            label: "Employee Name",
            value: data?.employeeName,
        },
        {
            label: "Designation",
            value: data?.designation,
        },
        {
            label: "Employee Code",
            value: data?.employeeCode,
        },
        {
            label: "Phone Number",
            value: data?.phoneNumber,
        },
    ];

    const RightGridData = [
        {
            label: "Department",
            value: data?.department,
        },
        {
            label: "Work Location",
            value: data?.workLocation,
        },
        {
            label: "Manager",
            value: data?.manager,
        },
        {
            label: "Email Id",
            value: data?.emailId,
        },
    ];


    return (
        <Card sx={{
            py: {
                xs: 1,
                sm: 2,
            }, pt: 4, px: 4, height: {
                xs: 'auto',
                sm: 'auto',
            }
        }}>
            {data?.employmentStatus && <Label variant="soft" color="primary"
                                              sx={{mb: 1}}>{UtilityService.replaceUnderscore(data?.employmentStatus)}</Label>}
            <StyledBg/>
            <Stack direction={{
                xs: 'column',
                xl: 'row',
            }}
                   spacing={{
                       xs: 0,
                       sm: 2,
                       md: 2,
                       lg: 3,
                   }}
                   sx={{
                       alignItems: {
                           xs: 'center',
                           xl: 'start',
                       },
                   }}
            >
                <Avatar
                    src={data?.profileImage}
                    sx={{height: '100px', width: '100px', mb: {xs: 2}}}
                />
                <Grid container justifyContent="center" gap={{xs: 0, md: 2}}>

                    <Grid item xs={12} sm={8} md={6}>
                        {
                            LeftGridData.map(({label, value}, idx) => (
                                <ItemList key={idx} label={label} value={value}/>
                            ))
                        }
                    </Grid>

                    <Grid item xs={12} sm={8} md={5.5}>
                        {
                            RightGridData.map(({label, value}, idx) => (
                                <ItemList key={idx} label={label} value={value}/>
                            ))
                        }
                    </Grid>
                </Grid>
            </Stack>
        </Card>
    )
}

ItemList.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
};

function ItemList({label, value}) {
    return (
        <Stack width="100%" direction={{xs: 'column', sm: "row"}} sx={{mb: 1}} textAlign={{xs: 'center', sm: 'left'}}
               gap={1}>
            <Typography variant="subtitle1" width={{sx: "100%", sm: "50%"}} color="text.secondary" nowrap>
                {label}
            </Typography>
            <Typography variant="subtitle1" color="text.primary" width={{sx: "100%", sm: "50%"}}>
                {value}
            </Typography>
        </Stack>
    )
}
