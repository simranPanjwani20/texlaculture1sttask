import PropTypes from 'prop-types';
import {Navigate, useLocation} from 'react-router-dom';

import {PATH_AUTH, PATH_DASHBOARD} from '../routes/paths';

import LoadingScreen from '../components/loading-screen';
//
import {useAuthContext} from './useAuthContext';

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
    children: PropTypes.node,
};

export default function GuestGuard({children}) {
    const {isAuthenticated, isInitialized, user} = useAuthContext();

    const {pathname} = useLocation();

    if (isAuthenticated) {
        if ((user.firstName == null || user.email == null) && pathname !== PATH_AUTH.addProfile) {
            return <Navigate to={PATH_AUTH.addProfile}/>;
        }
        return <Navigate to={PATH_DASHBOARD.root}/>;
    }

    if (!isInitialized) {
        return <LoadingScreen/>;
    }

    return <> {children} </>;
}
