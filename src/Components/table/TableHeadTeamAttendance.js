import PropTypes from 'prop-types';

import {Box, Checkbox, TableCell, TableHead, TableRow, TableSortLabel, Typography,} from '@mui/material';

// ----------------------------------------------------------------------

const visuallyHidden = {
    border: 0,
    margin: -1,
    padding: 0,
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    clip: 'rect(0 0 0 0)',
};

// ----------------------------------------------------------------------

TableHeadTeamAttendance.propTypes = {
    sx: PropTypes.object,
    onSort: PropTypes.func,
    orderBy: PropTypes.string,
    headLabel: PropTypes.array,
    rowCount: PropTypes.number,
    numSelected: PropTypes.number,
    onSelectAllRows: PropTypes.func,
    order: PropTypes.oneOf(['asc', 'desc']),
};

export default function TableHeadTeamAttendance({
                                                    order,
                                                    orderBy,
                                                    rowCount = 0,
                                                    headLabel,
                                                    numSelected = 0,
                                                    onSort,
                                                    onSelectAllRows,
                                                    sx,
                                                }) {
    return (
        <TableHead sx={sx}>
            <TableRow>
                {onSelectAllRows && (
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={(event) => onSelectAllRows(event.target.checked)}
                        />
                    </TableCell>
                )}

                {headLabel?.map((headCell, index) => (
                    <TableCell
                        key={index}
                        align={headCell.align || 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{width: headCell.width, minWidth: headCell.minWidth}}
                    >
                        {onSort ? (
                            <TableSortLabel
                                hideSortIcon
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={() => onSort(headCell.id)}
                                sx={{textTransform: 'capitalize'}}
                            >
                                <Box
                                    sx={{
                                        display: 'grid',
                                        // backgroundColor: `${headCell?.id === 'day3' && 'text.secondary'}`,
                                        paddingY: 1,
                                        paddingX: 2,
                                    }}
                                >
                                    <Box>
                                        <Typography variant="subtitle1" color="text.primary">
                                            {headCell?.label[0]}
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="subtitle1" color="text.primary">
                                            {headCell?.label[1]}
                                        </Typography>
                                    </Box>
                                </Box>

                                {orderBy === headCell.id ? (
                                    <Box sx={{...visuallyHidden}}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        ) : (
                            headCell.label
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
