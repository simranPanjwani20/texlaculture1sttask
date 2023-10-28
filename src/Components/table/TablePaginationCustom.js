import PropTypes from 'prop-types';

import {Box, FormControlLabel, Switch, TablePagination} from '@mui/material';

// ----------------------------------------------------------------------

TablePaginationCustom.propTypes = {
    dense: PropTypes.bool,
    onChangeDense: PropTypes.func,
    rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
    sx: PropTypes.object,
};

export default function TablePaginationCustom({
                                                  dense,
                                                  onChangeDense,
                                                  rowsPerPageOptions = [25, 50, 100],
                                                  sx,
                                                  ...other
                                              }) {
    return (
        <Box sx={{position: 'relative', ...sx}}>
            <TablePagination rowsPerPageOptions={rowsPerPageOptions} component="div" {...other} />

            {onChangeDense && (
                <FormControlLabel
                    label="Dense"
                    control={<Switch checked={dense} onChange={onChangeDense}/>}
                    sx={{
                        pl: 2,
                        py: 1.5,
                        top: 0,
                        position: {
                            md: 'absolute',
                        },
                    }}
                />
            )}
        </Box>
    );
}
