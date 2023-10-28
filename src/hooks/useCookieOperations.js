import {useCookies} from 'react-cookie';

export function useCookieOperations() {
    const [cookies, setCookie] = useCookies();

    const setCookieValue = (cookieName, value, expirationMinutes = 3) => {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + expirationMinutes * 60 * 1000);

        const cookieOptions = {
            path: '/',
            expires: expirationDate,
        };

        setCookie(cookieName, value, cookieOptions);
    };

    const getCookieValue = (cookieName) => cookies[cookieName];

    return {setCookieValue, getCookieValue};
}
