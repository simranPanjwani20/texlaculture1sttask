import {Outlet} from 'react-router-dom';

import {Box} from '@mui/material';
// hooks
//
import Main from './Main';
import HeaderBasic from "./header/HeaderBasic";

// ----------------------------------------------------------------------

export default function HrTechLayout() {

    return (
        <>
            <HeaderBasic/>

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
