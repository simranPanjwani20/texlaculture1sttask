import PropTypes from "prop-types";

import {Box, Stack, Typography} from '@mui/material';

import {UploadIllustration} from '../../assets/illustrations';

// ----------------------------------------------------------------------

BlockContent.propTypes = {
    type: PropTypes.string,
};

export default function BlockContent({type}) {
    return (
        <Stack
            spacing={2}
            alignItems="center"
            justifyContent="center"
            direction={{xs: 'column', md: 'row'}}
            sx={{width: 1, textAlign: {xs: 'center', md: 'left'}}}
        >
            <UploadIllustration sx={{width: 220}}/>

            <Box sx={{p: 3}}>
                <Typography gutterBottom variant="h5">
                    Drop or Select file
                </Typography>

                <Typography variant="body2" sx={{color: 'text.secondary'}}>
                    Drop files here or click&nbsp;
                    <Typography
                        variant="body2"
                        component="span"
                        sx={{color: 'primary.main', textDecoration: 'underline'}}
                    >
                        browse
                    </Typography>
                    &nbsp;thorough your machine
                </Typography>
                {type != null ? (
                    <Typography>Accepted file types: {type}</Typography>
                ) : null}
            </Box>
        </Stack>
    );
}
