import PropTypes from "prop-types";
import { Box, InputAdornment, TextField } from "@mui/material";

import Iconify from "../../../components/iconify";

// ----------------------------------------------------------------------

ExpenseDetailHrToolbar.propTypes = {
  value: PropTypes.string,
  onhandleChange: PropTypes.func,
  isSearching: PropTypes.bool,
  clearSearchInput: PropTypes.func,
  onPasteHandle: PropTypes.func,
};
export default function ExpenseDetailHrToolbar({
  value,
  onhandleChange,
  isSearching,
  clearSearchInput,
  onPasteHandle,
}) {
  return (
    <Box
      gap={2}
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
      }}
      sx={{ m: 2 }}
    >
      <TextField
        value={value}
        size="small"
        onChange={onhandleChange}
        onPaste={onPasteHandle}
        placeholder="Search by Name, Employee Code"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: "text.disabled", width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
          endAdornment: isSearching ? (
            <Iconify
              sx={{ cursor: "pointer", color: "gray" }}
              onClick={clearSearchInput}
              icon="eva-close-fill"
            />
          ) : (
            ""
          ),
        }}
      />
      <TextField
        value={value}
        size="small"
        onChange={onhandleChange}
        onPaste={onPasteHandle}
        placeholder="Designation"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: "text.disabled", width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
          endAdornment: isSearching ? (
            <Iconify
              sx={{ cursor: "pointer", color: "gray" }}
              onClick={clearSearchInput}
              icon="eva-close-fill"
            />
          ) : (
            ""
          ),
        }}
      />
      <TextField
        value={value}
        size="small"
        onChange={onhandleChange}
        onPaste={onPasteHandle}
        placeholder="Department"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: "text.disabled", width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
          endAdornment: isSearching ? (
            <Iconify
              sx={{ cursor: "pointer", color: "gray" }}
              onClick={clearSearchInput}
              icon="eva-close-fill"
            />
          ) : (
            ""
          ),
        }}
      />
      <TextField
        value={value}
        size="small"
        onChange={onhandleChange}
        onPaste={onPasteHandle}
        placeholder="Location"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Iconify
                icon="eva:search-fill"
                sx={{ color: "text.disabled", width: 20, height: 20 }}
              />
            </InputAdornment>
          ),
          endAdornment: isSearching ? (
            <Iconify
              sx={{ cursor: "pointer", color: "gray" }}
              onClick={clearSearchInput}
              icon="eva-close-fill"
            />
          ) : (
            ""
          ),
        }}
      />
    </Box>
  );
}
