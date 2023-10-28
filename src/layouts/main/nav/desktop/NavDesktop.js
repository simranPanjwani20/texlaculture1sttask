import PropTypes from 'prop-types';

import {Stack} from '@mui/material';
import {styled} from '@mui/material/styles';
//
import NavList from './NavList';

// ----------------------------------------------------------------------

const StyledLink = styled('a')(({theme}) => ({
    height: "min-content",
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '500',
    textDecoration: 'none',
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    "&:hover": {
        color: theme.palette.text.primary,
    }
}));


NavDesktop.propTypes = {
    data: PropTypes.array,
    isOffset: PropTypes.bool,
};

export default function NavDesktop({isOffset, data}) {
    // const navigate = useNavigate();
    return (
        <Stack component="nav" direction="row" spacing={5} sx={{mr: 8}}>
            {data.map((link) => (
                <NavList key={link.title} item={link} isOffset={isOffset}/>
            ))}
            {/* <StyledLink onClick={() => navigate(PATH_PAGE.offerings)}>
                Offerings
            </StyledLink>
            <StyledLink onClick={() => navigate(PATH_PAGE.coreHrms)}>
                Why choose us
            </StyledLink>
            <StyledLink target="_blank"
                        rel="noopener"
                        href="https://calendly.com/texlaculture-demo/30min?month=2023-08&date=2023-08-31">
                Demo
            </StyledLink>
            <StyledLink>
                Contact Us
            </StyledLink> */}
        </Stack>
    );
}
