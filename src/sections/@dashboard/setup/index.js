import React,{useState} from "react"
import Label from "../../../components/label"
import {alpha,styled, useTheme} from '@mui/material/styles';
import { Container, Typography } from "@mui/material"
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs'
import ExpenseDetailForm from "../../../components/expenseDetailForm";
import ApprovalAuthorityForm from "../../../components/approvalAuthorityForm";

export default function ExpenseSetup()
{

    const theme=useTheme()
    return(
        <Container >
         <CustomBreadcrumbs
                    heading="Expense Setup"
                    links={[
                        {name: 'Set Up', href:'#'},
                        {name: 'Expense Setup', href: '#'},
                    ]}
                    backButton
                />

            <ExpenseDetailForm/>
            <ApprovalAuthorityForm/>
        </Container>
    )
}