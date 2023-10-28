import PropTypes from 'prop-types';
import {useNavigate} from "react-router";
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import {Drawer, IconButton, List, Stack} from '@mui/material';
import {styled} from '@mui/material/styles';

import {NAV} from '../../../../config-global';

import Logo from '../../../../components/logo';
import Iconify from '../../../../components/iconify';
import Scrollbar from '../../../../components/scrollbar';
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


NavMobile.propTypes = {
    data: PropTypes.array,
    isOffset: PropTypes.bool,
};

export default function NavMobile({isOffset, data}) {
    const navigate = useNavigate();

    const {pathname} = useLocation();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            handleClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton
                onClick={handleOpen}
                sx={{
                    ml: 1,
                    ...(isOffset && {
                        color: 'text.primary',
                    }),
                }}
            >
                <Iconify icon="eva:menu-2-fill"/>
            </IconButton>

            <Drawer
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        pb: 5,
                        width: NAV.W_BASE,
                    },
                }}
            >
                <Scrollbar>
                    <Logo sx={{mx: 2.5, my: 3}}/>

                    <List component="nav" disablePadding>
                        {data.map((link) => (
                            <NavList key={link.title} item={link}/>
                        ))}
                    </List>

                    <Stack gap={3} alignItems="center">
                        {/* <StyledLink onClick={() => navigate(PATH_PAGE.offerings)}>
              Offerings
            </StyledLink> */}
                        {/* <StyledLink onClick={() => navigate(PATH_PAGE.coreHrms)}>
              Why choose us
            </StyledLink> */}
                        {/* <StyledLink target="_blank"
                  rel="noopener"
                  href="https://calendly.com/texlaculture-demo/30min?month=2023-08&date=2023-08-31">
              Demo
            </StyledLink> */}
                        {/* <StyledLink>
              Contact Us
            </StyledLink> */}
                    </Stack>

                </Scrollbar>
            </Drawer>
        </>
    );
}
