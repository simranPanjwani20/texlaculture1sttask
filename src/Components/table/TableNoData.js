import PropTypes from 'prop-types';

import {TableCell, TableRow} from '@mui/material';
//
import EmptyContent from '../empty-content';

// ----------------------------------------------------------------------

TableNoData.propTypes = {
    isNotFound: PropTypes.bool,
    height: PropTypes.number,
    title: PropTypes.string,
};

export default function TableNoData({isNotFound, height, title}) {
    return (
        <TableRow>
            {isNotFound ? (
                <TableCell colSpan={12}>
                    <EmptyContent
                        title={title || "No Data"}
                        sx={{
                            '& span.MuiBox-root': {height: height || 160},
                        }}
                    />
                </TableCell>
            ) : (
                <TableCell colSpan={12} sx={{p: 0}}/>
            )}
        </TableRow>
    );
}
