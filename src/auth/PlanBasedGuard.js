import PropTypes from 'prop-types';
import {m} from 'framer-motion';
import {useSelector} from "react-redux";

import {Container, Typography} from '@mui/material';

import {MotionContainer, varBounce} from '../components/animate';

import {ForbiddenIllustration} from '../assets/illustrations';
//
// import {useAuthContext} from './useAuthContext';

// ----------------------------------------------------------------------

PlanBasedGuard.propTypes = {
    children: PropTypes.node,
    hasContent: PropTypes.bool,
    roles: PropTypes.arrayOf(PropTypes.number),
};

export default function PlanBasedGuard({hasContent, roles, children}) {
    const companyPlanAccess = useSelector(state => state.companiesReducer.companyPlanAccess);

    const hasPlan = roles?.filter(role => companyPlanAccess?.mods?.filter(mod => mod?.id === role).length > 0).length > 0;
    // console.log(hasPlan, roles);

    if (typeof roles !== 'undefined' && !hasPlan) {
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
