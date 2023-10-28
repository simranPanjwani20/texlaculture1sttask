import PropTypes from 'prop-types';
import {m} from 'framer-motion';
import {useSelector} from "react-redux";

import {Container, Typography} from '@mui/material';

import {MotionContainer, varBounce} from '../components/animate';

import {ForbiddenIllustration} from '../assets/illustrations';
//
// import {useAuthContext} from './useAuthContext';

// ----------------------------------------------------------------------

RoleBasedGuard.propTypes = {
    children: PropTypes.node,
    hasContent: PropTypes.bool,
    roles: PropTypes.arrayOf(PropTypes.number),
};

export default function RoleBasedGuard({hasContent, roles, children}) {
    // Logic here to get current user role
    // const {user} = useAuthContext();
    // const companyRoles = useSelector(state => state.companiesReducer.companyRoles);
    const companyAccess = useSelector(state => state.companiesReducer.companyAccess);

    // const currentRole = 'user';
    // const currentRole = user?.role; // admin;
    // const currentRole = companyRoles[0];
    // const hasRole = !roles.includes(currentRole);
    // const hasRole = roles?.filter(role => companyRoles.includes(role)).length > 0;
    const hasRole = roles?.filter(role => companyAccess?.mods?.filter(mod => mod?.id === role).length > 0).length > 0;

    if (typeof roles !== 'undefined' && !hasRole) {
        return hasContent ? (
            <Container component={MotionContainer} sx={{textAlign: 'center'}}>
                <m.div variants={varBounce().in}>
                    <Typography variant="h3" paragraph>
                        Permission Denied
                    </Typography>
                </m.div>

                <m.div variants={varBounce().in}>
                    <Typography sx={{color: 'text.secondary'}}>
                        You do not have permission to access this page
                    </Typography>
                </m.div>

                <m.div variants={varBounce().in}>
                    <ForbiddenIllustration sx={{height: 260, my: {xs: 5, sm: 10}}}/>
                </m.div>
            </Container>
        ) : null;
    }

    return <> {children} </>;
}
