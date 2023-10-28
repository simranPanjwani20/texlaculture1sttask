import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {Box, Breadcrumbs, IconButton, Link, Stack, Typography} from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LinkItem from './LinkItem';

CustomBreadcrumbs.propTypes = {
    sx: PropTypes.object,
    action: PropTypes.node,
    links: PropTypes.array,
    heading: PropTypes.string,
    moreLink: PropTypes.array,
    activeLast: PropTypes.bool,
    backButton: PropTypes.bool,
    backHandler: PropTypes.func
};

export default function CustomBreadcrumbs({
                                              links,
                                              action,
                                              heading,
                                              moreLink,
                                              activeLast,
                                              backButton,
                                              backHandler,
                                              sx,
                                              ...other
                                          }) {
    const lastLink = !!links.length && links[links.length - 1].name;
    const navigate = useNavigate();

    return (
        <Box sx={{mb: 5, ...sx}}>
            <Stack direction={{xs: "column", sm: 'row'}} gap={{xs: 1, sm: 0}} alignItems="center">
                <Box sx={{flexGrow: 1}}>
                    <Stack direction="row" justifyContent="flex-start" alignItems="center">
                        {backButton && (
                            <IconButton onClick={() => backHandler ? backHandler() : navigate(-1)} sx={{mt: -0.6, mr: 2}}>
                                <ArrowBackIcon/>
                            </IconButton>
                        )}
                        {heading && (
                            <Typography variant="h4" gutterBottom>
                                {heading}
                            </Typography>
                        )}
                        {!!links.length && (
                            <Box sx={{marginInline: '20px', mt: -0.7}}>
                                <Breadcrumbs separator={<Separator/>} {...other}>
                                    {links.map((link) => (
                                        <LinkItem
                                            key={link.name || ''}
                                            link={link}
                                            activeLast={activeLast}
                                            disabled={link.name === lastLink}
                                        />
                                    ))}
                                </Breadcrumbs>
                            </Box>
                        )}
                    </Stack>
                </Box>
                {action && <Box
                    sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', flexShrink: 0}}> {action} </Box>}
            </Stack>

            {/* MORE LINK */}
            {!!moreLink && (
                <Box sx={{mt: 2}}>
                    {moreLink.map((href) => (
                        <Link
                            noWrap
                            key={href}
                            href={href}
                            variant="body2"
                            target="_blank"
                            rel="noopener"
                            sx={{display: 'table'}}
                        >
                            {href}
                        </Link>
                    ))}
                </Box>
            )}
        </Box>
    );
}

function Separator() {
    return (
        <Box
            component="span"
            sx={{width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled'}}
        />
    );
}
