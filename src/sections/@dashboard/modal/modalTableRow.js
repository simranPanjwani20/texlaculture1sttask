import React from "react";
import { Stack, TableCell, TableRow, Typography } from "@mui/material";
import { CustomAvatar } from "../../../components/custom-avatar";
import { Box, InputAdornment, TextField } from "@mui/material";

const ModalTableRow = ({ row, value, onhandleChange, onPasteHandle }) => {
  return (
    <TableRow>
      <TableCell>
        <Stack direction="row" alignItems="center" spacing={2}>
          <CustomAvatar name={row.name} src={row.img} />
          <div>
            <Typography variant="subtitle2" nowrap>
              {row.name}
            </Typography>
            <Typography variant="body2" nowrap>
              {row.code}
            </Typography>
          </div>
        </Stack>
      </TableCell>
      <TableCell align="left">
        <Typography variant="subtitle2" noWrap>
          {row.account}
        </Typography>
        <Typography variant="body2" noWrap>
          {row.ifsc}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography variant="subtitle2" noWrap>
          {row.bankName}
        </Typography>
        <Typography variant="body2" noWrap>
          {row.amt}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <TextField
          value={value}
          size="small"
          onChange={onhandleChange}
          onPaste={onPasteHandle}
          placeholder="Label"
        />
      </TableCell>
      <TableCell align="left">
        <TextField
          value={value}
          size="small"
          onChange={onhandleChange}
          onPaste={onPasteHandle}
          placeholder="Label"
        />
      </TableCell>
    </TableRow>
  );
};

export default ModalTableRow;
