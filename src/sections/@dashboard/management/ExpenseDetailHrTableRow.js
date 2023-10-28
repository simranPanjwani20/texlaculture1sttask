import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSnackbar } from "notistack";

import {
  Checkbox,
  IconButton,
  MenuItem,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
// import {useDispatch} from "react-redux";

import Label from "../../../components/label";
import Iconify from "../../../components/iconify";
import { CustomAvatar } from "../../../components/custom-avatar";
import MenuPopover from "../../../components/menu-popover";

// ----------------------------------------------------------------------
ExpenseDetailHrTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onViewRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
  onSelectRow: PropTypes.func,
};
export default function ExpenseDetailHrTableRow({
  row,
  selected,
  onSelectRow,
  onViewRow,
  onEditRow,
  onDeleteRow,
  selectedCard,
}) {
  const theme = useTheme();
  const {
    img,
    name,
    code,
    designation,
    department,
    resignation,
    working,
    payment,
    hrbp,
    hcode,
    location,
    funtion,
    status,
  } = row;
  const [openPopover, setOpenPopover] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpenPopover = (event) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {selectedCard == "pendingForApproval" ? (
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
              {row.designation}
            </Typography>
            <Typography variant="body2" noWrap>
              {row.department}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Stack direction="row" alignItems="center" spacing={2}>
              <CustomAvatar name={row.name} src={row.img} />
              <div>
                <Typography variant="subtitle2" noWrap>
                  {row.manager}
                </Typography>
                <Typography variant="body2" noWrap>
                  {row.mcode}
                </Typography>
              </div>
            </Stack>
          </TableCell>
          <TableCell>
            <Stack direction="row" alignItems="center" spacing={2}>
              <CustomAvatar name={row.name} src={row.img} />
              <div>
                <Typography variant="subtitle2" nowrap>
                  {row.hrbp}
                </Typography>
                <Typography variant="body2" nowrap>
                  {row.hcode}
                </Typography>
              </div>
            </Stack>
          </TableCell>
          <TableCell align="left">
            <Typography variant="subtitle2" noWrap>
              {row.payment}
            </Typography>
            <Typography variant="body2" noWrap>
              {row.working}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Label
              variant="soft"
              sx={{
                color: "primary.main",
                backgroundColor: alpha(theme.palette.primary.main, 0.2),
              }}
            >
              View Details
            </Label>{" "}
            :
          </TableCell>
        </TableRow>
      ) : selectedCard == "paid" ? (
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox checked={selected} onClick={onSelectRow} />
          </TableCell>
          <TableCell>
            <Stack direction="row" alignItems="center" spacing={2}>
              <CustomAvatar name={name} src={img} />
              <div>
                <Typography variant="subtitle2" nowrap>
                  {name}
                </Typography>
                <Typography variant="body2" nowrap>
                  {code}
                </Typography>
              </div>
            </Stack>
          </TableCell>
          <TableCell align="left">
            <Typography variant="subtitle2" noWrap>
              {row.manager}
            </Typography>
            <Typography variant="body2" noWrap>
              {row.mcode}
            </Typography>
          </TableCell>
          <TableCell>
            <Stack direction="row" alignItems="center" spacing={2}>
              <CustomAvatar name={row.name} src={row.img} />
              <div>
                <Typography variant="subtitle2" nowrap>
                  {row.hrbp}
                </Typography>
                <Typography variant="body2" nowrap>
                  {row.hcode}
                </Typography>
              </div>
            </Stack>
          </TableCell>
          <TableCell align="left">
            <Typography variant="subtitle2" noWrap>
              {row.payment}
            </Typography>
            <Typography variant="body2" noWrap>
              {row.working}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="subtitle2" noWrap>
              {row.approvedPayment}
            </Typography>
            <Typography variant="body2" noWrap>
              {row.working}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="body2" noWrap>
              :
            </Typography>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox checked={selected} onClick={onSelectRow} />
          </TableCell>
          <TableCell>
            <Stack direction="row" alignItems="center" spacing={2}>
              <CustomAvatar name={name} src={img} />
              <div>
                <Typography variant="subtitle2" nowrap>
                  {name}
                </Typography>
                <Typography variant="body2" nowrap>
                  {code}
                </Typography>
              </div>
            </Stack>
          </TableCell>
          <TableCell align="left">
            <Typography variant="subtitle2" noWrap>
              {designation}
            </Typography>
            <Typography variant="body2" noWrap>
              {department}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="subtitle2" noWrap>
              {resignation}
            </Typography>
            <Typography variant="body2" noWrap>
              {working}
            </Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="subtitle2" noWrap>
              {payment}
            </Typography>
          </TableCell>
          <TableCell>
            <Stack direction="row" alignItems="center" spacing={2}>
              <CustomAvatar name={name} src={img} />
              <div>
                <Typography variant="subtitle2" nowrap>
                  {hrbp}
                </Typography>
                <Typography variant="body2" nowrap>
                  {hcode}
                </Typography>
              </div>
            </Stack>
          </TableCell>
          <TableCell align="left">
            <Typography variant="subtitle2" noWrap>
              {location}
            </Typography>
            <Typography variant="body2" noWrap>
              {funtion}
            </Typography>
          </TableCell>
          <TableCell align="left">
            {status === "Approved" ? (
              <Label
                variant="soft"
                sx={{
                  color: "primary.main",
                  backgroundColor: alpha(theme.palette.primary.main, 0.2),
                }}
              >
                {status}
              </Label>
            ) : (
              <Label
                variant="soft"
                sx={{
                  color: "secondary.main",
                  backgroundColor: alpha(theme.palette.secondary.main, 0.2),
                }}
              >
                {status}
              </Label>
            )}
          </TableCell>

          <TableCell>
            <IconButton
              color={openPopover ? "inherit" : "default"}
              onClick={(event) => handleOpenPopover(event)}
            >
              <Iconify icon="eva:more-vertical-fill" />
            </IconButton>
          </TableCell>

          <MenuPopover
            open={openPopover}
            onClose={handleClosePopover}
            arrow="right-top"
          >
            <MenuItem onClick={() => setOpen(true)}>
              <Iconify icon="openmoji:details" />
              Detail
            </MenuItem>
          </MenuPopover>
        </TableRow>
      )}

      {/*  <FullAndFinalPaymentModal open={open} onClose={handleClose}/> */}
    </>
  );
}
