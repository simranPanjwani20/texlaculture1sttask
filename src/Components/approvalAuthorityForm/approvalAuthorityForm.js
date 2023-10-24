import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';

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
  margin: '2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px'
  }));

  const Input =styled(TextField)(({ theme }) => ({
   margin: "5px",
   width: "96%"
  }));


const ApprovalAuthorityCard = () => {

  return (
    <StyledCard >
      <CardContent>
        <StyledForm >
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Typography>Approval Authority</Typography>
            <StyledButton
            variant="contained"
            
          >
            <AddIcon/>
            Add
          </StyledButton>
            </div>
          <div style={{ display: 'flex' }}>
            <Input
              label="1st level Approval"
              variant="outlined"
              fullWidth
            />
            <Input
              label="Select 1st Level Approval Authority"
              variant="outlined"
              fullWidth
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Input
              label="2nd level Approval"
              variant="outlined"
              fullWidth
            />
            <Input
              label="Select 2nd Level Approval Authority"
              variant="outlined"
              fullWidth
            />
          </div>
         
        </StyledForm>
      </CardContent>
    </StyledCard>
  );
};

export default ApprovalAuthorityCard;
