import {PATH_AUTH} from '../routes/paths';

import UtilityService from "../services/UtilityService";
import StorageService from "../services/StorageService";
import RestService from "../services/RestService";

// ----------------------------------------------------------------------

function jwtDecode(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join('')
    );

    return JSON.parse(jsonPayload);
}

// ----------------------------------------------------------------------
export const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false;
    }

    const decoded = jwtDecode(accessToken);

    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
};

// ----------------------------------------------------------------------

export const tokenExpired = (exp) => {
    // eslint-disable-next-line prefer-const
    let expiredTimer;

    const currentTime = Date.now();

    // Test token expires after 10s
    // const timeLeft = currentTime + 10000 - currentTime; // ~10s
    const timeLeft = exp * 1000 - currentTime;

    clearTimeout(expiredTimer);

    expiredTimer = setTimeout(() => {
        alert('Token expired');

        localStorage.removeItem('accessToken');

        window.location.href = PATH_AUTH.login;
    }, timeLeft);
};

// ----------------------------------------------------------------------

export const setSession = (accessToken) => {
    if (accessToken) {
        UtilityService.setAuthToken(accessToken);
        StorageService.setItem(StorageService.KEYS.AUTH_TOKEN, accessToken);
        // localStorage.setItem('accessToken', accessToken);
        // axios.defaults.headers.common[Constants.AUTH_HEADER] = `${accessToken}`;
        RestService.addRequestTransform();

        // This function below will handle when token is expired
        const {exp} = jwtDecode(accessToken); // ~3 days by minimals server
        // tokenExpired(exp);
    } else {
        UtilityService.setAuthToken(null);
        StorageService.deleteKey(StorageService.KEYS.AUTH_TOKEN);
    }
};

export const setCompany = (company) => {
    if (company) {
        UtilityService.setCompany(company);
        StorageService.setItem(StorageService.KEYS.COMPANY, company);
        RestService.addRequestTransform();
    } else {
        UtilityService.setCompany(null);
        StorageService.deleteKey(StorageService.KEYS.COMPANY);
    }
};
