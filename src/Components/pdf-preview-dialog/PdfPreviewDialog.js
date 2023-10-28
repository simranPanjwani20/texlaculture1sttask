import {useState} from "react";
import Iframe from "react-iframe";
import PropTypes from "prop-types";
import {useTheme} from "@mui/material/styles";
import {Box, Dialog, DialogActions, IconButton, Tooltip, useMediaQuery} from "@mui/material";
import Iconify from "../iconify/Iconify";

PdfPreviewDialog.propTypes = {
    file: PropTypes.string,
    show: PropTypes.bool,
    setShow: PropTypes.func,
    mode: PropTypes.oneOf(["overlay", "fullscreen"]),
    isImage: PropTypes.bool,
};

export default function PdfPreviewDialog({file, show, setShow, isImage, mode = "overlay"}) {
    const [fullscreen, setFullscreen] = useState(false);
    const theme = useTheme();
    // const isImage = file && /\.(jpg|jpeg|png|gif)$/i.test(file);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleToggleFullscreen = () => {
        setFullscreen((prevFullscreen) => !prevFullscreen);
    };

    const handleClose = () => {
        setShow(false);
        setFullscreen(false);
    };

    const renderContent = () => {
        if (isImage) {
            return (
                <img
                    src={file}
                    alt="Preview"
                    style={{width: "100%", height: '100%', objectFit: "contain"}}
                />
            );
            // eslint-disable-next-line
        } else {
            return (
                <Iframe
                    url={file}
                    width="100%"
                    height="100%"
                    display="block"
                    position="relative"
                />
            );
        }
    };

    const dialogActionsProps = {
        zIndex: 9,
        padding: "12px !important",
        boxShadow: (themes) => themes.customShadows.z8,
        position: mode === "fullscreen" ? "fixed" : "static",
        top: mode === "fullscreen" ? theme.spacing(1) : "auto",
        right: mode === "fullscreen" ? theme.spacing(1) : "auto",
    };

    return (
        <Dialog
            open={show}
            onClose={handleClose}
            fullScreen={mode === "fullscreen"}
            maxWidth={mode === "overlay" ? "md" : "xl"}
            fullWidth={mode === "overlay"}
            className={mode === "fullscreen" ? "fullscreen-dialog" : ""}
        >
            <Box sx={{height: "100%", display: "flex", flexDirection: "column"}}>
                <DialogActions sx={dialogActionsProps}>
                    {mode === "overlay" && (
                        <Tooltip title="Close">
                            <IconButton color="inherit" onClick={handleClose}>
                                <Iconify icon="eva:close-fill"/>
                            </IconButton>
                        </Tooltip>
                    )}
                    {mode === "fullscreen" && (
                        <Tooltip title="Close">
                            <IconButton color="inherit" onClick={() => setShow(false)}>
                                <Iconify icon="eva:close-fill"/>
                            </IconButton>
                        </Tooltip>
                    )}
                </DialogActions>

                <Box
                    sx={{
                        flexGrow: 1,
                        height: "70vh",
                        overflow: "hidden",
                        pt: mode === "overlay" ? 1 : 8,
                    }}
                >
                    {renderContent()}
                </Box>
            </Box>
        </Dialog>
    );
}
