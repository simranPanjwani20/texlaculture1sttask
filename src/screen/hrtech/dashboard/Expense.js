import React,{useState} from "react"
import {useTheme} from '@mui/material/styles';
import { Container } from "@mui/material"
import ExpenseSetup from '../../../sections/@dashboard/setup'

export default function Expense()
{
    return(
        <Container >
        <ExpenseSetup/>
        </Container>
    )
}