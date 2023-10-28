import PropTypes from 'prop-types';
import {Box, Card, Stack, Typography} from '@mui/material';
import {alpha, useTheme} from '@mui/material/styles';

import {CustomAvatar} from "../custom-avatar";

ApproversCard.propTypes = {
    approvers: PropTypes.array,
    title: PropTypes.string,
    color: PropTypes.string,
    sx: PropTypes.object,
};
export default function ApproversCard({approvers, title, color, sx}) {
    const themeColor = useTheme();

    const colorLabel = color || 'primary';

    return (
        <Card
            sx={{
                display: 'inline-block',
                backgroundColor: alpha(themeColor.palette[colorLabel].main, 0.1),
                border: `1px solid ${themeColor.palette[colorLabel].main}`,
                pb: 2,
                ...sx
            }}
        >
            <Stack sx={{justifyContent: 'flex-start', zIndex: 999}}>
                <Typography fontSize='10px' color="text.primary"
                            sx={{
                                color: themeColor.palette[colorLabel].light,
                                ml: 1,
                                mt: 1,
                            }}
                >
                    {title || 'Approvers'}
                </Typography>
            </Stack>
            <Box sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                justifyContent: 'flex-start',
                alignItems: {xs: 'start', sm: 'center'},
                mx: 2,
                mt: 1,
                gap: 2
            }}>
                {approvers?.map((profile, index) => <ProfileCard profile={profile} key={index}/>)}
            </Box>
        </Card>
    )
}

ProfileCard.propTypes = {
    profile: PropTypes.object,
};

function ProfileCard({profile}) {
    const {name, profileUrl, code} = profile;

    return (
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', zIndex: -9}}>
            <CustomAvatar
                sx={{width: 30, height: 30}}
                name={name}
                src={profileUrl}
            />
            <Stack display="flex" flexDirection="column" sx={{mx: 1}}>
                <Typography variant="overline" color="text.primary" textTransform="none" noWrap>
                    {name}
                </Typography>
                <Typography noWrap variant="caption" color="text.secondary">
                    {code}
                </Typography>
            </Stack>
        </Box>
    )
}
