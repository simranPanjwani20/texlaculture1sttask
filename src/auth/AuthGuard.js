import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import LoadingScreen from '../components/loading-screen';
import Login from '../screens/auth/Login';
import {useAuthContext} from './useAuthContext';
import {PATH_AUTH, PATH_DASHBOARD, PATH_USER} from '../routes/paths';
import {useCookieOperations} from '../hooks/useCookieOperations';
import CompaniesActions from "../screens/dashboard/user/userScreen/CompaniesActions";

AuthGuard.propTypes = {
    children: PropTypes.node,
};

export default function AuthGuard({children}) {
    const {isAuthenticated, isInitialized, user, company} = useAuthContext();
    const {pathname} = useLocation();
    const {setCookieValue, getCookieValue} = useCookieOperations();
    const location = useLocation();
    const dispatch = useDispatch()
    const [requestedLocation, setRequestedLocation] = useState(null);
    const [visitedUrls, setVisitedUrls] = useState([]);
    const storedLink = getCookieValue('applyJob');
    const companyAccess = useSelector(state => state.companiesReducer.companyAccess);
    const companyPlanAccess = useSelector(state => state.companiesReducer.companyPlanAccess);

    function updateVisitedUrls(url) {
        const urls = JSON.parse(localStorage.getItem("visitedUrls")) || [];
        urls.push(url);
        localStorage.setItem("visitedUrls", JSON.stringify(urls));
        setVisitedUrls(urls);
    }

    useEffect(() => {
        const urls = JSON.parse(localStorage.getItem("visitedUrls")) || [];
        setVisitedUrls(urls);
    }, []);

    useEffect(() => {
        updateVisitedUrls(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        const storedLocation = localStorage.getItem('requestedLocation');
        if (storedLocation && pathname !== storedLocation) {
            setRequestedLocation(storedLocation);
            localStorage.removeItem('requestedLocation');
        }
    }, [pathname]);

    useEffect(() => {
        if (!isAuthenticated && pathname !== requestedLocation) {
            localStorage.setItem('requestedLocation', pathname);
        }
    }, [isAuthenticated, pathname, requestedLocation]);

    useEffect(() => {
        if (company && !localStorage.getItem('CP')) {
            localStorage.setItem('CP', JSON.stringify(company));
        }
    }, [company]);


    const storedCompany = JSON.parse(localStorage.getItem('CP'));

    useEffect(() => {
        if (isAuthenticated && storedCompany) {
            // dispatch(CompaniesActions.loadUserCompanyRoles());
            if (companyAccess == null) {
                dispatch(CompaniesActions.loadUserCompanyAccess());
            }
            if (companyPlanAccess == null) {
                dispatch(CompaniesActions.loadCompanyPlanAccess());
            }
        }
    }, [isAuthenticated, storedCompany, dispatch, companyAccess, companyPlanAccess]);

    if (!isInitialized) {
        return <LoadingScreen/>;
    }

    if (!isAuthenticated) {
        if (pathname !== requestedLocation) {
            setRequestedLocation(pathname);
        }
        return <Login/>;
    }

    if ((user.firstName == null || user.email == null) && pathname !== PATH_AUTH.addProfile) {
        return <Navigate to={PATH_AUTH.addProfile}/>;
    }

    if (!storedCompany && pathname.includes(PATH_DASHBOARD.root) && (storedLink?.startsWith('/job/'))) {
        return <Navigate to={PATH_USER.applyJob}/>;
    }

    if (!storedCompany && pathname.includes(PATH_DASHBOARD.root)) {
        return <Navigate to={PATH_USER.root}/>;
    }

    if (requestedLocation && pathname !== requestedLocation) {
        // dispatch(CompaniesActions.loadUserCompanyRoles())
        setRequestedLocation(null);
        return <Navigate to={requestedLocation}/>;
    }

    return <>{children}</>;
}
