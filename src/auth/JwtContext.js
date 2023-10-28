import PropTypes from 'prop-types';
import {createContext, useCallback, useEffect, useMemo, useReducer} from 'react';
import TagManager from 'react-gtm-module'
import * as store from "../redux/store";

import UtilityService from '../services/UtilityService';
//
import {isValidToken, setCompany, setSession} from './utils';
import StorageService from "../services/StorageService";
import RestService from "../services/RestService";
import APIConstants from "../utils/APIConstants";
import Constants from "../utils/Constants";

// ----------------------------------------------------------------------

// NOTE:
// We only build demo at basic level.
// Customer will need to do some extra handling yourself if you want to extend the logic and other features...

// ----------------------------------------------------------------------

const initialState = {
    isInitialized: false,
    isAuthenticated: false,
    loginAction: 'LOOKUP',
    registerSuccess: false,
    user: null,
    company: null,
};

const reducer = (state, action) => {
    if (action.type === 'INITIAL') {
        return {
            isInitialized: true,
            isAuthenticated: action.payload.isAuthenticated,
            user: action.payload.user,
            loginAction: 'LOOKUP',
            registerSuccess: false,
            company: action.payload.company,
        };
    }
    if (action.type === 'LOOKUP') {
        return {
            ...state,
            isInitialized: true,
            isAuthenticated: false,
            loginAction: action.payload.action,
            user: action.payload.user
        };
    }
    if (action.type === 'LOGIN') {
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user,
        };
    }
    if (action.type === 'REGISTER') {
        return {
            ...state,
            isAuthenticated: true,
            loginAction: 'SIGNUP',
            registerSuccess: true,
            user: action.payload.user,
        };
    }
    if (action.type === 'LOGOUT') {
        return {
            ...state,
            iisAuthenticated: false,
            loginAction: 'LOOKUP',
            company: null,
            user: null,
        };
    }
    if (action.type === 'UPDATE_USER') {
        return {
            ...state,
            user: action.payload.user,
        };
    }
    if (action.type === 'UPDATE_COMPANY') {
        return {
            ...state,
            company: action.payload.company,
        };
    }

    return state;
};

// ----------------------------------------------------------------------

// export const AuthContext = createContext(initialState);
export const AuthContext = createContext({
    ...initialState,
    method: 'jwt',
    login: () => Promise.resolve(),
    lookup: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    register: () => Promise.resolve(),
    forgotPin: () => Promise.resolve(),
    resetPin: () => Promise.resolve(),
    updateUser: () => Promise.resolve(),
    updateCompany: () => Promise.resolve(),
    resetLogin: () => Promise.resolve(),
});
// ----------------------------------------------------------------------

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export function AuthProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const storageAvailable = UtilityService.localStorageAvailable();

    const initialize = useCallback(async () => {
        console.log("calling initialize:::::::")
        try {
            const accessToken = storageAvailable ? StorageService.getItem(StorageService.KEYS.AUTH_TOKEN) : null;
            if (accessToken && isValidToken(accessToken)) {
                setSession(accessToken);
                let user = StorageService.getItem(StorageService.KEYS.USER_INFO);
                if (user == null) {
                    user = {}
                }

                const response = await RestService.getJSON(APIConstants.endPoints.user.self);
                if (response != null && response.contact != null) {
                    user = response;
                }
                dispatch({
                    type: 'INITIAL',
                    payload: {
                        isAuthenticated: true,
                        company: null,
                        user,
                    },
                });
            } else {
                dispatch({
                    type: 'INITIAL',
                    payload: {
                        isAuthenticated: false,
                        company: null,
                        user: null,
                    },
                });
            }
        } catch (err) {
            console.error(err);
            dispatch({
                type: 'INITIAL',
                payload: {
                    isAuthenticated: false,
                    company: null,
                    user: null,
                },
            });
        }
    }, [storageAvailable]);

    useEffect(() => {
        initialize();
    }, [initialize]);


    const resetLogin = useCallback(async () => {
        StorageService.deleteKey(StorageService.KEYS.AUTH_TOKEN);
        StorageService.deleteKey(StorageService.KEYS.USER_INFO);
        StorageService.deleteKey(StorageService.KEYS.COMPANY);
        dispatch({
            type: 'INITIAL',
            payload: initialState,
        });
    }, []);

    // LOGIN
    const login = useCallback(async (contact, password) => {
        const response = await RestService.postJSON(APIConstants.endPoints.user.login, {
            contact,
            password,
            application: Constants.getAppName()
        });
        if (response && response.ok) {
            const {token} = response.data;
            const user = {...response.data, token: null};
            setSession(token);
            StorageService.setItem(StorageService.KEYS.USER_INFO, user);
            dispatch({
                type: 'LOGIN',
                payload: {
                    user,
                },
            });
            const tagManagerArgs = {
                gtmId: Constants.getGtmId(),
                events: {
                    login: user
                }
            }
            TagManager.initialize(tagManagerArgs);
        } else if (response.data.message) {
            throw new Error(response.data.message);
        } else {
            throw new Error('Something went wrong.');
        }
    }, []);

    // LOOKUP
    const lookup = useCallback(async (contact) => {
        const application = Constants.getAppName();
        const response = await RestService.postJSON(APIConstants.endPoints.user.lookup, {contact, application});
        if (response && response.ok) {
            dispatch({
                type: 'LOOKUP',
                payload: {action: response.data.action, user: response.data},
            });
        } else if (response.data.message) {
            throw new Error(response.data.message);
        } else {
            throw new Error('Something went wrong.');
        }
    }, []);

    // REGISTER
    const register = useCallback(async (contact, password, otp) => {
        const application = Constants.getAppName();
        const response = await RestService.postJSON(APIConstants.endPoints.user.signup, {
            contact,
            password,
            otp,
            application
        });
        if (response && response.ok) {
            const {token} = response.data;
            const user = {...response.data, token: null};
            setSession(token);
            StorageService.setItem(StorageService.KEYS.USER_INFO, user);
            dispatch({
                type: 'REGISTER',
                payload: {
                    user,
                },
            });
        } else if (response.data.message) {
            throw new Error(response.data.message);
        } else {
            throw new Error('Something went wrong.');
        }
    }, []);

    // FORGOT PIN
    const forgotPin = useCallback(async (contact) => {
        const application = Constants.getAppName();
        const response = await RestService.postJSON(APIConstants.endPoints.user.forgotPin, {
            contact,
            application
        });
        if (!response || !response.ok) {
            if (response.data.message) {
                throw new Error(response.data.message);
            } else {
                throw new Error('Something went wrong.');
            }
        }
    }, []);

    // OTP SEND
    const otpSend = useCallback(async (contact) => {
        const application = Constants.getAppName();
        const response = await RestService.postJSON(APIConstants.endPoints.user.otpSend, {
            contact,
            application
        });
        if (!response || !response.ok) {
            if (response.data.message) {
                throw new Error(response.data.message);
            } else {
                throw new Error('Something went wrong.');
            }
        }
    }, []);

    // RESET PIN
    const resetPin = useCallback(async (contact, password, otp) => {
        const application = Constants.getAppName();
        const response = await RestService.postJSON(APIConstants.endPoints.user.resetPin, {
            contact,
            otp,
            password,
            application
        });
        if (!response || !response.ok) {
            if (response.data.message) {
                throw new Error(response.data.message);
            } else {
                throw new Error('Something went wrong.');
            }
        }
    }, []);

    // UPDATE_USER
    const updateUser = useCallback(async (user) => {
        StorageService.setItem(StorageService.KEYS.USER_INFO, user);
        dispatch({
            type: 'UPDATE_USER',
            payload: {
                user,
            },
        });
    }, []);

    // UPDATE_COMPANY
    const updateCompany = useCallback(async (company) => {
        setCompany(company);
        dispatch({
            type: 'UPDATE_COMPANY',
            payload: {
                company,
            },
        });
    }, []);

    // LOGOUT
    const logout = useCallback(async () => {
        const response = await RestService.postJSON(APIConstants.endPoints.user.logout);
        if (response && response.ok) {
            setSession(null);
            setCompany(null);
            StorageService.deleteKey(StorageService.KEYS.AUTH_TOKEN);
            StorageService.deleteKey(StorageService.KEYS.USER_INFO);
            StorageService.deleteKey(StorageService.KEYS.COMPANY);
            dispatch({type: 'LOGOUT'});
            store.dispatch({type: 'RESET_ALL_STATE'});
            dispatch({
                type: 'INITIAL',
                payload: initialState,
            });
        } else if (response.data.message) {
            throw new Error(response.data.message);
        } else {
            throw new Error('Something went wrong.');
        }
    }, []);

    const memoizedValue = useMemo(
        () => ({
            isInitialized: state.isInitialized,
            isAuthenticated: state.isAuthenticated,
            user: state.user,
            method: 'jwt',
            loginAction: state.loginAction,
            company: state.company,
            initialize,
            login,
            register,
            logout,
            lookup,
            updateCompany,
            updateUser,
            forgotPin,
            otpSend,
            resetPin,
            resetLogin
        }),
        [state.isAuthenticated, state.isInitialized, state.user, state.loginAction, state.company, login, logout, register, lookup, updateUser,
            updateCompany, forgotPin, otpSend, resetPin, resetLogin, initialize]
    );

    return <AuthContext.Provider value={memoizedValue}>
        {/* <IdleMonitor logOut={logout} /> */}
        {children}
    </AuthContext.Provider>;
}
