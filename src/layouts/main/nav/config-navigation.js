import {PATH_PAGE} from '../../../routes/paths';


import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const navConfig = [
    {
        title: 'Home',
        icon: <Iconify icon="teenyicons:home-solid"/>,
        path: '/',
    },
    {
        title: 'Products',
        path: '/pages',
        icon: <Iconify icon="ion:grid"/>,
        children: [
            {
                subheader: 'Core HR',
                items: [
                    {title: 'Core HRMS', path: PATH_PAGE.coreHrms},
                    {title: 'ESS Portal', path: PATH_PAGE.essPortal},
                    {title: 'Employee Profiles', path: PATH_PAGE.employeeProfiles},
                    {title: 'Document Management', path: PATH_PAGE.employeeDocuments},
                    {title: 'Policy Management', path: PATH_PAGE.companyPolicy},
                    {title: 'HR Analytics', path: PATH_PAGE.hrAnalytics},
                    {title: 'Helpdesk', path: PATH_PAGE.helpdesk},
                ],
            },
            {
                subheader: 'Payroll & Expenses',
                items: [
                    {title: 'Payroll', path: PATH_PAGE.payroll},
                    {title: 'Compliance', path: PATH_PAGE.payrollCompliance},
                    {title: 'Expense Management', path: PATH_PAGE.expenseManagement},
                    {title: 'Compensation', path: PATH_PAGE.compensation},
                    {title: 'Loan & Advances', path: PATH_PAGE.loanAdvances},
                    {title: 'Tax & Finance', path: PATH_PAGE.taxFinance},
                    // {title: 'Rewards & Recognition', path: PATH_PAGE.rewardsRecognition},
                ],
            },
            {
                subheader: 'Time & Attendance',
                items: [
                    {title: 'Attendance Management', path: PATH_PAGE.attendance},
                    {title: 'Leave Management', path: PATH_PAGE.leaves},
                    {title: 'Shift Management', path: PATH_PAGE.shiftManagement},
                    {title: 'Mobile/GPS Attendance', path: PATH_PAGE.mobileAttendance},
                ],
            },
            {
                subheader: 'Hiring & Onboarding',
                items: [
                    {title: 'Hiring Software', path: PATH_PAGE.hiring},
                    {title: 'Applicant Tracking', path: PATH_PAGE.applicantTracking},
                    {title: 'Job Posting', path: PATH_PAGE.jobPosting},
                    // {title: 'Offer Management', path: PATH_PAGE.offerManagement},
                    {title: 'Employee Onboarding', path: PATH_PAGE.onboarding},
                ],
            },
            /* {
                subheader: 'Learning',
                items: [
                    {title: 'Learning Management', path: PATH_PAGE.lms},
                    {title: 'Training Programs', path: PATH_PAGE.training},
                    {title: 'Training Needs Identification', path: PATH_PAGE.trainingNeeds},
                ],
            }, */
            {
                subheader: 'Performance Management',
                items: [
                    {title: 'Performance Management', path: PATH_PAGE.pms},
                    /* {title: '360 Degree Reviews', path: PATH_PAGE.pms360},
                    {title: 'OKR System', path: PATH_PAGE.pmsOkr},
                    {title: 'Continuous Feedback', path: PATH_PAGE.continuousFeedback}, */
                ],
            },
            /* {
                subheader: 'Dashboard',
                items: [
                {title: 'Dashboard', path: PATH_AFTER_LOGIN}
                {title: 'Payment', path: PATH_PAGE.payment},
                {title: 'Maintenance', path: PATH_PAGE.maintenance},
                {title: 'Coming Soon', path: PATH_PAGE.comingSoon },
                {title: 'About us', path: PATH_PAGE.about},
                {title: 'Contact us', path: PATH_PAGE.contact},
                {title: 'FAQs', path: PATH_PAGE.faqs},
                ],
            }, */
        ],
    },
    /* {
        title: 'Pricing',
        icon: <Iconify icon="eva:home-fill"/>,
        path: PATH_PAGE.pricing,
    }, */
    {
        title: 'About Us',
        path: '/about-us',
        icon: <Iconify icon="mdi:about"/>,
        children: ""
    },
    {
        title: 'Contact Us',
        icon: <Iconify icon="ph:phone-fill"/>,
        path: PATH_PAGE.contact,
    },
    /* {
        title: 'Demo',
        icon: <Iconify icon="ic:round-grain"/>,
        path: 'https://calendly.com/texlaculture/demo',
        isExternalLink: true
    }, */
];

export default navConfig;
