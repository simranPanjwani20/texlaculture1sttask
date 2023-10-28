import PropTypes from 'prop-types';
import {Card, Modal} from '@mui/material';
import {styled} from '@mui/material/styles';

import Scrollbar from '../scrollbar/Scrollbar';


CustomModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    sx: PropTypes.object,
    children: PropTypes.node,
};

const StyledCard = styled(Card)(({theme}) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    padding: "24px",
    bgcolor: 'background.paper',
    maxHeight: '90vh',
    overflow: 'auto',
    [theme.breakpoints.down('lg')]: {
        width: "70%",
    },
    [theme.breakpoints.down('sm')]: {
        width: "90%",
    },
}));


function CustomModal({open, onClose, sx, children}) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <StyledCard sx={sx}>
                <Scrollbar>{children}</Scrollbar>
            </StyledCard>
        </Modal>
    )
}

export default CustomModal;
