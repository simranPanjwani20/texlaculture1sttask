import PropTypes from 'prop-types';

import {Box, Checkbox, Link, Stack, TableCell, TableHead, TableRow, TableSortLabel, Typography,} from '@mui/material';

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

TableDoubleHeadCustom.propTypes = {
    sx: PropTypes.object,
    onSort: PropTypes.func,
    orderBy: PropTypes.string,
    headLabel: PropTypes.array,
    rowCount: PropTypes.number,
    numSelected: PropTypes.number,
    onSelectAllRows: PropTypes.func,
    order: PropTypes.oneOf(['asc', 'desc']),
};

export default function TableDoubleHeadCustom({
                                                  order,
                                                  orderBy,
                                                  rowCount = 0,
                                                  headLabel,
                                                  numSelected = 0,
                                                  onSort,
                                                  onSelectAllRows,
                                                  sx,
                                                  selectedCard
                                              }) {
    return (
        <TableHead sx={sx}>
            <TableRow>
               
                {selectedCard!="pendingForApproval"&& onSelectAllRows && (
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={(event) => onSelectAllRows(event.target.checked)}
                        />
                    </TableCell>
                )}

                {headLabel.map((headCell, i) => (
                    <TableCell
                        key={i}
                        align={headCell.align || 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{width: headCell.width, minWidth: headCell.minWidth, background: headCell.background}}
                    >
                        {onSort ? (
                            <TableSortLabel
                                hideSortIcon
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={() => onSort(headCell.id)}
                                sx={{textTransform: 'capitalize'}}
                            >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <div>
                                        <Typography variant="subtitle2">
                                            {headCell?.label[0]}
                                        </Typography>
                                        <Link
                                            noWrap
                                            variant="body2"
                                            sx={{color: 'text.disabled', cursor: 'pointer'}}
                                        >
                                            {headCell?.label[1]}
                                        </Link>
                                    </div>
                                </Stack>

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
