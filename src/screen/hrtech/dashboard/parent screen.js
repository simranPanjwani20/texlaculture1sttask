import React, {useState} from 'react';
import {styled, useTheme} from '@mui/material/styles';
import {CardHeader, Container, Grid, Stack, TableHead, Typography} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// others
import useTabs from "../../../hooks/useTabs";
import CustomBreadcrumbs from '../../../components/custom-breadcrumbs';
import MyModal from '../../../sections/@dashboard/modal/modal'
import TicketCard from "../../../components/ticket-card";
import ExpenseDetailHr from "../../../sections/@dashboard/management/ExpenseDetailHr";


const StyledCardGrid = styled('div')(({theme}) => ({
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: "repeat(auto-fit, 220px)"
}));


export default function ExpenseDashboardHrSpaceScreen() {
    const {currentTab: helpdeskView, onChangeTab: onHelpdeskView} = useTabs('Dashboard')
    const [selectedCard, setSelectedCard] = useState('pendingForApproval');

    const today = new Date(); // current date and time
    const [filterStatus, setFilterStatus] = useState('Pending for Approval');
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const handleFilterStatus = (event, newValue) => {
        newValue=='Pending for Approval'?setSelectedCard("pendingForApproval"): newValue=='Paid'?setSelectedCard("paid"): setSelectedCard("approvedNotPaid")
        // setSelectedCard(newValue)
        setFilterStatus(newValue);
    };
    const StyledButton =styled("button")(({ theme }) => ({
        backgroundColor: "green",
      color: "white",
      border: 'none',
      padding: "8px 8px",
      fontSize: '1rem',
     width: 'fitContent',
      borderRadius: "10px",
      margin: '2px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      }));

      const StyledStack =styled(Stack)(({ theme }) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      }));

    const tableHead = {
        pendingForApproval:[
            {id: 'name', label: ["Name", "Employee Code"], align: 'left'},
            {id: 'designation', label: ["Designation", "Department"], align: 'left'},
            {id: 'manager', label: ["Manager", "Code"], align: 'left'},
            {id: 'hrbp', label: ['HRBP', "code"], align: 'left'},
            {id: 'claimed Amount', label: ["Claimed Amount", "Date"], align: 'left'},
            {id: 'action', label: ["Action"], align: 'left'},
        ],

        approvedNotPaid: [
            {id: 'name', label: ["Name", "Employee Code"], align: 'left'},
            {id: 'claimed Amount', label: ["Claimed Amount", "Date"], align: 'left'},
            {id: 'hrbp', label: ['Manager', "Department"], align: 'left'},
            {id: 'resignation', label: ["Resignation Date", "Last Working Day"], align: 'left'},
            {id: 'payment', label: ['F&F Payment', ""], align: 'left'},
            {id: 'hrbp', label: ['HRBP', ""], align: 'left'},
            {id: 'location', label: ['Location', "Function"], align: 'left'},
            {id: 'status', label: ['Exit Status', ""], align: 'left'},
            {id: 'dots', label: ['', ""], align: 'left'},
        ],
        paid:[
            {id: 'name', label: ["Name", "Employee Code"], align: 'left'},
            {id: 'manager', label: ["Manager", "Code"], align: 'left'},
            {id: 'hrbp', label: ['HRBP', "code"], align: 'left'},
            {id: 'claimed Amount', label: ["Claimed Amount", "Date"], align: 'left'},
            {id: 'approved Amount', label: ["Approved Amount", "Date"], align: 'left'},
            {id: 'action', label: ["Action"], align: 'left'},
        ]
        
    };

    const cardData = {
        pendingForApproval: [
            {
                img: "",
                name: "Shubham",
                code: "SHU123",
                designation: "Software Engineer",
                department: "Technology",
                manager: "Rahul Singh",
                mcode: "123456",
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
            },
            {
                img: "",
                name: "Shub",
                code: "SHU123",
                designation: "Software Engineer",
                department: "Technology",
                manager: "Rahul Singh",
                mcode: "123456",
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
            },
            {
                img: "",
                name: "bham",
                code: "SHU123",
                designation: "Software Engineer",
                department: "Technology",
                manager: "Rahul Singh",
                mcode: "123456",
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
            },
            {
                img: "",
                name: "Sh",
                code: "SHU123",
                designation: "Software Engineer",
                department: "Technology",
                manager: "Rahul Singh",
                mcode: "123456",
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
            },
        ],
        approvedNotPaid: [
            {
                img: "",
                name: "Shubham",
                code: "SHU123",
                designation: "Software Engineer",
                department: "Technology",
                resignation: "1 Aug,2023",
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
                location: "Head Office",
                funtion: "Corporate",
                status: "Approved not Paid"
            },
            {
                img: "",
                name: "Shubham",
                code: "SHU123",
                designation: "Software Engineer",
                department: "Technology",
                resignation: "1 Aug,2023",
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
                location: "Head Office",
                funtion: "Corporate",
                status: "Approved"
            },
            {
                img: "",
                name: "Shubham",
                code: "SHU123",
                designation: "Software Engineer",
                department: "Technology",
                resignation: "1 Aug,2023",
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
                location: "Head Office",
                funtion: "Corporate",
                status: "Approved not Paid"
            },
            {
                img: "",
                name: "Shubham",
                code: "SHU123",
                designation: "Software Engineer",
                department: "Technology",
                resignation: "1 Aug,2023",
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
                location: "Head Office",
                funtion: "Corporate",
                status: "Approved"
            },
        ],
        paid: [
            {
                img: "",
                name: "Shubham",
                code: "SHU123",
                manager: "Rahul Singh",
                mcode: "123456",
                approvedPayment: 200000,
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
            },
            {
                img: "",
                name: "Shubham",
                code: "SHU123",
                manager: "Rahul Singh",
                mcode: "123456",
                approvedPayment: 200000,
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
            },
            {
                img: "",
                name: "Shubham",
                code: "SHU123",
                manager: "Rahul Singh",
                mcode: "123456",
                approvedPayment: 200000,
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
            },
            {
                img: "",
                name: "Shubham",
                code: "SHU123",
                manager: "Rahul Singh",
                mcode: "123456",
                approvedPayment: 200000,
                working: "20 Aug,2023",
                payment: "20000",
                hrbp: "Chandrakant Aggrawal",
                hcode: "2345654",
            },
        ],
      };

    const TICKETS_PAYABLE_DATA = [
        {
            label: 'Pending for Approval',
            value: 96,
            fontColor: 'warning.light',
            bgColor: 'warning.softer',
            icon: "octicon:share-16",
        },
        {
            label: 'Approved not paid',
            value: 96,
            fontColor: 'secondary.main',
            bgColor: 'secondary.lighter',
            icon: "icon-park-outline:hourglass",
        },
        {
            label: 'Paid',
            value: 65,
            fontColor: 'success.main',
            bgColor: 'success.lighter',
            icon: "icon-park-outline:ticket",
        },
    ]


    const EXPENSE_TAB = [
        {
            value: 'Dashboard',
            component: (
                <>
                </>
            )
        },
        {
            value: 'Expense Details',
            component: (
                <>
                    <Grid container gap={3}>
                        <Grid item xs={12}>
                            <StyledCardGrid>
                                {TICKETS_PAYABLE_DATA.map((tab) => (
                                    <Grid key={tab.label} item>
                                        <TicketCard
                                            icon={tab.icon}
                                            size="small"
                                            label={tab.label}
                                            value={tab.value}
                                            fontColor={tab.fontColor}
                                            bgColor={tab.bgColor}
                                            isSelected={tab.label === filterStatus}
                                            handleClick={(e) => handleFilterStatus(e, tab.label)}
                                        />
                                    </Grid>
                                ))}
                            </StyledCardGrid>
                        </Grid>
                        <Grid item xs={12}>
                            <ExpenseDetailHr tableHead={tableHead[selectedCard]} candidateData={cardData[selectedCard]} selectedCard={selectedCard}/>
                        </Grid>
                    </Grid>
                </>
            )
        }
    ]

    return (
        <>
            <Container maxWidth={'xl'}>
            <StyledStack>
                <CustomBreadcrumbs
                    heading="Expense"
                    links={[{name: 'Hr Space', href: '#'}, {name: 'Expense Dashboard'}]}
                    backButton
                />
                 <StyledButton onClick={handleOpen}
            variant="contained"
          > Open Modal</StyledButton>
      <MyModal open={open} handleClose={handleClose} />
      </StyledStack>
                <Tabs
                    value={helpdeskView}
                    onChange={onHelpdeskView}
                    sx={{
                        mt:-2,
                        mb: 3,
                        px: 2
                    }}
                >
                    {EXPENSE_TAB.map((tab, index) =>
                        <Tab
                            disableRipple
                            key={tab.value}
                            label={tab.value}
                            value={tab.value}
                        />
                    )}
                </Tabs>
                {EXPENSE_TAB.map((tab, index) => {
                    const isMatched = tab.value === helpdeskView;
                    return isMatched && <Box key={tab.value}>{tab.component}</Box>;
                })}
            </Container>
        </>
    )
}

