import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'
import {Box, Button, Dialog, DialogContent, DialogTitle, Typography} from "@mui/material";
import {useTheme} from '@mui/material/styles';
import Image from "../components/image/Image";
import Constants from "../utils/Constants";

IdleMonitor.propTypes = {
    logOut: PropTypes.func,
};

export default function IdleMonitor({logOut}) {

    const theme = useTheme();

    const [idle, setIdle] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let timeoutId;
        const handleTimeout = () => {
            setOpen(true);
        };
        const handleUserActivity = () => {
            clearTimeout(timeoutId);
            setIdle(false);
            timeoutId = setTimeout(handleTimeout, Constants.idleTimeOut); // 30 minutes
        };

        document.addEventListener("mousemove", handleUserActivity);
        document.addEventListener("keydown", handleUserActivity);

        timeoutId = setTimeout(handleTimeout, Constants.idleTimeOut); // 30 minutes

        return () => {
            document.removeEventListener("mousemove", handleUserActivity);
            document.removeEventListener("keydown", handleUserActivity);
            clearTimeout(timeoutId);
        };
    }, []);

    const handleClose = () => {
        setOpen(false);
        setIdle(true);
        logOut()
    };

    const handleExtend = () => {
        setOpen(false);
        setIdle(false);
    }

    return (
        <div>
            <Dialog maxWidth="md" open={open} onClose={handleClose} sx={{}}>
                <DialogTitle textAlign="center" sx={{fontStyle: 'bold'}}>Session Timeout</DialogTitle>
                <DialogContent sx={{typography: 'body2'}}>
                    <Typography>
                        Your session has expired due to being inactive for over 30 minutes.
                    </Typography>
                    <Typography textAlign="center">
                        Please log in again!
                    </Typography>
                </DialogContent>
                <Image src='/assets/illustrations/illustration_session_timeout_warning.png' alt="image" sx={{
                    width: 150,
                    height: 150, m: 'auto'
                }}/>
                {/* <DialogActions> */}
                <Box align="center" mb="16px">
                    {/* <Button onClick={handleExtend} color="success" variant="contained">
            Yes
          </Button> */}
                    <Button onClick={handleClose} color="warning" variant="contained">
                        Log In
                    </Button>
                </Box>
                {/* </DialogActions> */}
            </Dialog>
        </div>
    );
};

