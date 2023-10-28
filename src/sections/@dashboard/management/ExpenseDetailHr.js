import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import {useTheme} from '@mui/material/styles';
import {Card, Container, Table, TableBody, TableContainer} from '@mui/material';

// hooks
// _mock
import Scrollbar from '../../../components/scrollbar';
// sections
import {
    emptyRows,
    TableDoubleHeadCustom,
    TableEmptyRows,
    TablePaginationCustom,
    TableSelectedAction,
    useTable
} from "../../../components/table";
import ExpenseDetailHrToolbar from "./ExpenseDetailHrToolbar";
import ExpenseDetailHrTableRow from "./ExpenseDetailHrTableRow";
// ----------------------------------------------------------------------

export default function ExpenseDetailHr({tableHead, candidateData, selectedCard}) {
    const [isSearching, setIssearching] = useState(false);

    const {
        dense,
        page,
        order,
        orderBy,
        rowsPerPage,
        setPage,
        //
        selected,
        setSelected,
        onSelectRow,
        onSelectAllRows,
        //
        onSort,
        onChangeDense,
        onChangePage,
        onChangeRowsPerPage,
    } = useTable({defaultOrderBy: 'createDate'});

    const [tableData, setTableData] = useState(candidateData);
    const [openConfirm, setOpenConfirm] = useState(false);
    const dataInPage = candidateData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const denseHeight = dense ? 56 : 76;
    const handleOpenConfirm = () => {
        setOpenConfirm(true);
    };
    const handleCloseConfirm = () => {
        setOpenConfirm(false);
    };
    return (
        // <Page title="Hr Space | Hiring Dashboard">
            <Container maxWidth={'xl'}>
                <Card>
                    <ExpenseDetailHrToolbar
                        onhandleChange=""
                        isSearching={isSearching}
                        clearSearchInput=""
                        onPasteHandle=""
                    />
                    <TableContainer sx={{position: 'relative', overflow: 'unset'}}>
                        <TableSelectedAction
                            dense={dense}
                            numSelected={selected.length}
                            rowCount={tableData.length}
                            onSelectAllRows={(checked) =>
                                onSelectAllRows(
                                    checked,
                                    tableData.map((row) => row.id)
                                )
                            }

                        />
                        <Scrollbar>
                            <Table size={dense ? 'small' : 'medium'} sx={{minWidth: 800}}>
                                <TableDoubleHeadCustom
                                    order={order}
                                    orderBy={orderBy}
                                    headLabel={tableHead}
                                    rowCount={tableData.length}
                                    numSelected={selected.length}
                                    onSort={onSort}
                                    selectedCard={selectedCard}
                                    onSelectAllRows={onSelectAllRows}
                                    
                                />
                                <TableBody>
                                    {candidateData
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => (
                                            <ExpenseDetailHrTableRow
                                            selectedCard={selectedCard}
                                                key={row.id}
                                                row={row}
                                            />
                                        ))}
                                    <TableEmptyRows
                                        height={denseHeight}
                                        emptyRows={emptyRows(page, rowsPerPage, tableData.length)}
                                    />
                                    {/* <TableNoData isNotFound={isNotFound} /> */}
                                </TableBody>
                            </Table>
                        </Scrollbar>
                    </TableContainer>
                    <TablePaginationCustom
                        count={candidateData.length}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        onPageChange={onChangePage}
                        onRowsPerPageChange={onChangeRowsPerPage}
                        dense={dense}
                        onChangeDense={onChangeDense}
                    />
                </Card>
            </Container>
        // </Page>
    );
}
