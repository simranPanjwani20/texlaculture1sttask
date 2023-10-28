import {Outlet} from 'react-router-dom';

import {Box} from '@mui/material';
// hooks
//
import Main from './Main';
import HeaderUser from "./header/HeaderUser";

// ----------------------------------------------------------------------

export default function UserLayout() {

    return (
        <>
            <HeaderUser/>

            <Box
                sx={{
                    display: {lg: 'flex'},
                    minHeight: {lg: 1},
                }}
            >
                <Main>
                    <Outlet/>
                </Main>
            </Box>
        </>
    );
}
