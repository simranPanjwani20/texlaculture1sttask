import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Card } from "@mui/material";
import Backdrop from "@material-ui/core/Backdrop";
import { styled } from "@mui/material/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Scrollbar from "../../../components/scrollbar";
import { Table, TableBody } from "@mui/material";
import { Stack } from "@mui/material";
import { TableDoubleHeadCustom, useTable } from "../../../components/table";
import ModalToolbar from "./modalToolbar";
import ModalTableRow from "./modalTableRow";

const MyModal = ({ open, handleClose }) => {
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
  } = useTable({ defaultOrderBy: "createDate" });
  const StyledCard = styled(Card)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    maxHeight: "90vh",
    overflow: "auto",
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  }));
  const tableHead = [
    { id: "name", label: ["Name", "Employee Code"], align: "left" },
    { id: "account", label: ["Account Number", "IFSC Code"], align: "left" },
    { id: "payment", label: ["Bank Name", "Payemnt Amount"], align: "left" },
    { id: "date", label: ["Payment Date"], align: "left" },
    { id: "utr", label: ["UTR NO."], align: "left" },
  ];
  const tableData = [
    {
      img: "",
      name: "Shubham",
      code: "SHU123",
      account: "0987654",
      ifsc: "pp3456",
      bankName: "HDFC",
      amt: "20000",
    },
    {
      img: "",
      name: "Shubham",
      code: "SHU123",
      account: "0987654",
      ifsc: "pp3456",
      bankName: "HDFC",
      amt: "20000",
    },
    {
      img: "",
      name: "Shubham",
      code: "SHU123",
      account: "0987654",
      ifsc: "pp3456",
      bankName: "HDFC",
      amt: "20000",
    },
    {
      img: "",
      name: "Shubham",
      code: "SHU123",
      account: "0987654",
      ifsc: "pp3456",
      bankName: "HDFC",
      amt: "20000",
    },
  ];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <StyledCard>
        <Paper
          style={{
            backgroundColor: "lightgreen",
            padding: "10px",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <Typography
            variant="h6"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Expense Payment Process
          </Typography>
        </Paper>
        <Stack direction="row" justifyContent="start" p={2} gap={3}>
          <Typography style={{ color: "darkgray", fontWeight: "bold" }}>
            Total Payment
          </Typography>
          <Typography style={{ color: "black", fontWeight: "bold" }}>
            $80000
          </Typography>
        </Stack>
        <Card style={{ margin: "10px", height: "fitContent" }}>
          <ModalToolbar value="" onhandleChange="" onPasteHandle="" />
          <Scrollbar>
            <Table size={dense ? "small" : "medium"} sx={{ minWidth: 800 }}>
              <TableDoubleHeadCustom
                order={order}
                orderBy={orderBy}
                headLabel={tableHead}
                rowCount={tableData.length}
                numSelected={selected.length}
                onSort={onSort}
                selectedCard={"pendingForApproval"}
                onSelectAllRows={onSelectAllRows}
              />
              <TableBody>
                {tableData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <ModalTableRow key={row.id} row={row} />
                  ))}
                {/* <TableNoData isNotFound={isNotFound} /> */}
              </TableBody>
            </Table>
          </Scrollbar>
        </Card>
      </StyledCard>
    </Modal>
  );
};

export default MyModal;
