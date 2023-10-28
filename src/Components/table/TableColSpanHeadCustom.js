import PropTypes from 'prop-types';

import {Box, Checkbox, Link, TableCell, TableHead, TableRow, TableSortLabel, Typography,} from '@mui/material';

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

TableColSpanHeadCustom.propTypes = {
    sx: PropTypes.object,
    onSort: PropTypes.func,
    orderBy: PropTypes.string,
    headLabel: PropTypes.array,
    rowCount: PropTypes.number,
    numSelected: PropTypes.number,
    onSelectAllRows: PropTypes.func,
    order: PropTypes.oneOf(['asc', 'desc']),
};

export default function TableColSpanHeadCustom({
                                                   order,
                                                   orderBy,
                                                   rowCount = 0,
                                                   headLabel,
                                                   numSelected = 0,
                                                   onSort,
                                                   onSelectAllRows,
                                                   sx,
                                               }) {

    const subLabels = [];
    headLabel.forEach((label) => {
        const arr = label.subLabels || [];
        subLabels.push(...arr);
    })

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

                {headLabel.map((headCell, i) => (
                    <TableCell
                        key={i}
                        colSpan={headCell.colSpan || 1}
                        align={headCell.align || 'left'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{
                            width: headCell.width,
                            minWidth: headCell.minWidth,
                            backgroundColor: headCell.backgroundColor
                        }}
                    >
                        {onSort ? (
                            <TableSortLabel
                                hideSortIcon
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={() => onSort(headCell.id)}
                                sx={{textTransform: 'capitalize'}}
                            >
                                <Typography variant="subtitle2" noWrap>
                                    {headCell?.label}
                                </Typography>

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

            <TableRow>
                {subLabels.map((label, i) => (
                    <TableCell
                        key={i}
                    >
                        <TableSortLabel
                            hideSortIcon
                            sx={{textTransform: 'capitalize'}}
                        >
                            <Link
                                noWrap
                                variant="body2"
                                // onClick={onViewRow}
                                sx={{color: 'text.disabled', cursor: 'pointer'}}
                            >
                                {label}
                            </Link>
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}
