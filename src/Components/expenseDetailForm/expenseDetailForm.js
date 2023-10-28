import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: "16px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  margin:"20px",
  border: "1px solid  #BDBDBD"
  }));

  const StyledForm = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: "16px",
  }));

const StyledButton =styled("button")(({ theme }) => ({
    backgroundColor: "green",
  color: "white",
  marginTop: "16px",
  border: 'none',
  padding: "8px 15px",
  fontSize: '1rem',
  height: "3rem",
  borderRadius: "10px",
  margin: '2px'
  }));

  const Input =styled(TextField)(({ theme }) => ({
   margin: "5px",
   width: "96%"
  }));


const ExpenseDetailForm = () => {

  return (
    <StyledCard >
      <CardContent>
        <StyledForm >
            <Typography>Expense Payable TAT</Typography>
            <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: "50%"}}>
          <Input
            label=""
            select
            variant="outlined"
            
          >
            <MenuItem value="vendor">Vendor</MenuItem>
            <MenuItem value="supplier">Supplier</MenuItem>
            <MenuItem value="contractor">Contractor</MenuItem>
          </Input>
          </div>
          <Typography>From Approved Day</Typography>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{width: '100%'}}>
            <Typography>Expense Payable Cycle Name</Typography>
            <Input
              label=""
              variant="outlined"
              fullWidth
            />
            </div>
            <div style={{width: '100%'}}>
            <Typography>Expense Payment Cycle Start Date</Typography>
            <Input
              label=""
              variant="outlined"
              fullWidth
            />
            </div>
          </div>
          <Typography>Expense Payment End Date</Typography>
          <div style={{display: "flex", alignItems:"center"}}>
            <div style={{width: "50%"}}>
          <Input
            label=""
            variant="outlined"
            fullWidth
          />
          </div>
          <StyledButton
            variant="contained"
            
          >
            Save
          </StyledButton>
          </div>
        </StyledForm>
      </CardContent>
    </StyledCard>
  );
};

export default ExpenseDetailForm;
