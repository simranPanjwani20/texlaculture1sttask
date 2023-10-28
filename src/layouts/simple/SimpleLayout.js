import {Outlet} from 'react-router-dom';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';

import {HEADER} from '../../config-global';

import Header from './Header';

// ----------------------------------------------------------------------

export default function SimpleLayout() {
    const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);

    return (
        <>
            <Header isOffset={isOffset}/>

            <Outlet/>
        </>
    );
}
