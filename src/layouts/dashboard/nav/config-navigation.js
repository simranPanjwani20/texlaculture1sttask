import {PATH_DASHBOARD} from '../../../routes/paths';

import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
    <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{width: 1, height: 1}}/>
);

const ICONS = {
    blog: icon('ic_blog'),
    cart: icon('ic_cart'),
    chat: icon('ic_chat'),
    mail: icon('ic_mail'),
    user: icon('ic_user'),
    file: icon('ic_file'),
    lock: icon('ic_lock'),
    label: icon('ic_label'),
    blank: icon('ic_blank'),
    kanban: icon('ic_kanban'),
    folder: icon('ic_folder'),
    banking: icon('ic_banking'),
    booking: icon('ic_booking'),
    invoice: icon('ic_invoice'),
    calendar: icon('ic_calendar'),
    disabled: icon('ic_disabled'),
    external: icon('ic_external'),
    menuItem: icon('ic_menu_item'),
    ecommerce: icon('ic_ecommerce'),
    analytics: icon('ic_analytics'),
    dashboard: icon('ic_dashboard'),
    home: icon('ic_home'),
    mySpace: icon('ic_myspace'),
    employeeDetails: icon('ic_employee_details'),
    attendance: icon('ic_attendance'),
    announcement: icon('ic_announcement'),
    hiring: icon('ic_hiring'),
    jobOffers: icon('ic_job_offers'),
    helpdesk: icon('ic_helpdesk'),
    timeOffice: icon('ic_time_office'),
    employeeLifeCycle: icon('ic_employee_life_cycle'),
    payroll: icon('ic_payroll'),
    employeeDocument: icon('ic_employee_document'),
    policySetup: icon('ic_policy_setup'),
    templatesSetup: icon('ic_template_setup'),
    identityAccess: icon('ic_identity_access_setup'),
    companyPolicies: icon('ic_company_policies'),
    signature: icon('ic_signature_authority'),
    organization: icon('ic_organization'),
    lms: icon('ic_learning_management'),
};

const navConfig = [
    {
        subheader: 'people care system',
        items: [
            {title: 'home', path: PATH_DASHBOARD.care.home, icon: ICONS.home},
            {
                title: 'my space',
                path: PATH_DASHBOARD.mySpace.self,
                icon: ICONS.mySpace,
                children: [
                    {title: 'profile', path: PATH_DASHBOARD.mySpace.profile},
                    {title: 'my attendance', path: PATH_DASHBOARD.mySpace.attendance, roles: [19], planAccess: true},
                    {title: 'my leaves', path: PATH_DASHBOARD.mySpace.leaves, roles: [21], planAccess: true},
                    {title: 'holiday calendar', path: PATH_DASHBOARD.mySpace.holidayCalendar},
                    {
                        title: 'my courses',
                        path: PATH_DASHBOARD.mySpace.learningManagementSystem,
                        roles: [22],
                        planAccess: true
                    },
                    {
                        title: 'my referrals',
                        path: PATH_DASHBOARD.mySpace.applicationTrackingSystem,
                        roles: [16],
                        planAccess: true
                    },
                    {title: 'employee directory', path: PATH_DASHBOARD.mySpace.employeeDirectory},
                    {
                        title: 'my performance',
                        path: PATH_DASHBOARD.mySpace.myPerformance,
                        roles: [23],
                        planAccess: true
                    },
                    {title: 'messenger', path: PATH_DASHBOARD.mySpace.messenger, roles: [18], planAccess: true},
                    {
                        title: 'expense management',
                        path: PATH_DASHBOARD.mySpace.expenseManagement,
                        roles: [24],
                        planAccess: true
                    },
                    {title: 'notifications', path: PATH_DASHBOARD.mySpace.notificationCenter},
                    {
                        title: "announcement",
                        path: PATH_DASHBOARD.mySpace.announcementCenter,
                        /* roles: [16], */
                        planAccess: true
                    },
                    {title: 'helpdesk ', path: PATH_DASHBOARD.mySpace.helpDesk, roles: [14], planAccess: true},
                    {title: "organizational chart", path: PATH_DASHBOARD.mySpace.organizationalChart},
                    {title: "payroll", path: PATH_DASHBOARD.mySpace.payroll, roles: [3], planAccess: true},
                    {
                        title: "screening schedules",
                        path: PATH_DASHBOARD.mySpace.screeningSchedules,
                        roles: [16],
                        planAccess: true
                    },
                    {
                        title: 'hiring request',
                        path: PATH_DASHBOARD.mySpace.hiringRequest,
                        roles: [16],
                        planAccess: true
                    },
                    {title: "my org. policies", path: PATH_DASHBOARD.mySpace.organizationPolicy},
                    {title: 'my assets', path: PATH_DASHBOARD.mySpace.myAssets},
                    {title: 'loans and advances', path: PATH_DASHBOARD.mySpace.loansAndAdvances},
                    {title: 'feedback and survey', path: PATH_DASHBOARD.mySpace.feedbackAndSurvey},
                ],
            },
        ],
    },
    // MANAGEMENT
    {
        subheader: 'management',
        items: [
            {
                title: 'employee details',
                path: PATH_DASHBOARD.management.employee.list,
                icon: ICONS.employeeDetails,
            },
            {
                title: 'expense',
                path: PATH_DASHBOARD.management.expenseDocuments.expenseDocument,
                icon: ICONS.payroll,
                roles: [21],
                planAccess: true,
            },
            {
                title: 'team leaves',
                path: PATH_DASHBOARD.management.leaves.teamLeaves,
                icon: ICONS.disabled,
                roles: [21],
                planAccess: true,
            },
            {
                title: 'attendance',
                path: PATH_DASHBOARD.management.attendance.self,
                icon: ICONS.attendance,
                roles: [19, 20],
                planAccess: true,
                children: [
                    {
                        title: 'team attendance',
                        path: PATH_DASHBOARD.management.attendance.teamAttendance,
                        roles: [19],
                        planAccess: true,
                    },
                    {
                        title: 'shift mapping',
                        path: PATH_DASHBOARD.management.attendance.shiftMapping,
                        roles: [20],
                        planAccess: true,
                    },
                    {
                        title: "today's team attendance",
                        path: PATH_DASHBOARD.management.attendance.myTeams,
                        roles: [19],
                        planAccess: true,
                    },
                ],
            },
            // { title: 'learning management', path: PATH_DASHBOARD.management.lms.assign, icon: ICONS.disabled },
        ],
    },
    // HR SPACE
    {
        subheader: 'HR Space',
        items: [
            {
                title: 'time office',
                path: PATH_DASHBOARD.hrSpace.timeOffice.self,
                icon: ICONS.timeOffice,
                roles: [13],
                children: [
                    {title: 'leaves', path: PATH_DASHBOARD.hrSpace.timeOffice.leaveBulkUploader},
                    {title: 'team attendance', path: PATH_DASHBOARD.hrSpace.timeOffice.teamAttendanceHrSpace},
                    {title: 'shift mapping', path: PATH_DASHBOARD.hrSpace.timeOffice.shiftMappingHrSpace},
                    {title: 'attendance attribute', path: PATH_DASHBOARD.hrSpace.timeOffice.attendanceAttribute},
                ],
            },
            {
                title: 'payroll',
                path: PATH_DASHBOARD.hrSpace.payroll.self,
                icon: ICONS.payroll,
                roles: [1],
                children: [
                    {title: 'salary structure', path: PATH_DASHBOARD.hrSpace.payroll.salaryStructure,},
                    {title: 'payroll processing', path: PATH_DASHBOARD.hrSpace.payroll.payrollProcessing,},
                    {title: 'pay statement', path: PATH_DASHBOARD.hrSpace.payroll.payStatement,},
                    {title: 'Full and Final Processing', path: PATH_DASHBOARD.hrSpace.payroll.fullAndFinal,},
                    {title: 'loans and advances', path: PATH_DASHBOARD.hrSpace.payroll.loansAndAdvancesDashboard,},
                ],
            },
            {
                title: 'employee life cycle',
                path: PATH_DASHBOARD.hrSpace.employeeLifeCycle.self,
                icon: ICONS.employeeLifeCycle,
                roles: [15],
                children: [
                    {title: 'transfer', path: PATH_DASHBOARD.hrSpace.employeeLifeCycle.transfer,},
                    {title: 'separation', path: PATH_DASHBOARD.hrSpace.employeeLifeCycle.separation},
                    {title: 'absconding', path: PATH_DASHBOARD.hrSpace.employeeLifeCycle.absconding},
                    {title: 'confirmation', path: PATH_DASHBOARD.hrSpace.employeeLifeCycle.confirmation},
                    {title: 'Work Profile', path: PATH_DASHBOARD.hrSpace.employeeLifeCycle.workProfile},
                ],
            },
            {
                title: 'hiring',
                path: PATH_DASHBOARD.hrSpace.hiring.hiringDashboard,
                icon: ICONS.hiring,
                roles: [16],
                // children: [
                // { title: 'hiring dashboard', path: PATH_DASHBOARD.hrSpace.hiring.hiringDashboard },
                // { title: 'candidate dashboard', path: PATH_DASHBOARD.hrSpace.hiring.candidateDashboard },
                // { title: 'hiring', path: PATH_DASHBOARD.hrSpace.hiring.list },
                // ],
            },
            {
                title: 'Exit Management',
                path: PATH_DASHBOARD.hrSpace.exitManagement.dashboard,
                icon: ICONS.disabled,
                // roles: [],
            },
            {
                title: 'Human Capital',
                path: PATH_DASHBOARD.hrSpace.humanCapital.dashboard,
                icon: ICONS.disabled,
                // roles: [],
            },
            {
                title: 'announcement',
                path: PATH_DASHBOARD.hrSpace.announcement.self,
                icon: ICONS.announcement,
                roles: [5],
            },
            {
                title: 'helpdesk',
                path: PATH_DASHBOARD.hrSpace.helpdesk.dashboard,
                icon: ICONS.helpdesk,
                roles: [14],
            },
            {
                title: 'employee documents',
                path: PATH_DASHBOARD.hrSpace.employeeDocuments.teamDocuments,
                icon: ICONS.employeeDocument,
            },
            {
                title: 'Reports',
                path: PATH_DASHBOARD.hrSpace.reports.consolidatedReports,
                icon: ICONS.employeeDocument,
            },
            {
                title: 'expense analytics',
                path: PATH_DASHBOARD.hrSpace.expense.dashboard,
                icon: ICONS.payroll,
                roles: [24],
            },
            {
                title: 'Asset Management',
                path: PATH_DASHBOARD.hrSpace.assetManagement.assets,
                icon: ICONS.disabled,
            },
            {
                title: 'feedback and survey',
                path: PATH_DASHBOARD.hrSpace.feedbackSurvey.feedbackAndSurvey,
                icon: ICONS.companyPolicies,
            },
        ],
    },
    // IMPORTERS
    {
        subheader: 'Setup',
        items: [
            {
                title: 'organization setup',
                path: PATH_DASHBOARD.setup.organization.self,
                icon: ICONS.organization,
                roles: [7],
                children: [
                    {
                        title: 'basic setup',
                        path: PATH_DASHBOARD.setup.organization.basicSetup.self,
                        children: [
                            {title: 'metadata', path: PATH_DASHBOARD.setup.organization.basicSetup.metadata},
                            // {title: 'onboarding document checklist', path: PATH_DASHBOARD.setup.organization.basicSetup.onboardingDocumentChecklist,},
                        ],
                    },
                    {title: 'business function', path: PATH_DASHBOARD.setup.organization.businessFunctions},
                    {title: 'departments', path: PATH_DASHBOARD.setup.organization.departments},
                    {title: 'employment grades', path: PATH_DASHBOARD.setup.organization.grades},
                    {title: 'designations', path: PATH_DASHBOARD.setup.organization.designations},
                    {title: 'locations', path: PATH_DASHBOARD.setup.organization.locations},
                    {title: 'company logo', path: PATH_DASHBOARD.setup.organization.companyLogo},
                ],
            },
            {
                title: 'employee setup',
                path: PATH_DASHBOARD.setup.employees.self,
                icon: ICONS.employeeDetails,
                roles: [6],
                children: [
                    {title: 'profile', path: PATH_DASHBOARD.setup.employees.profile,},
                    {title: 'personal details', path: PATH_DASHBOARD.setup.employees.personalDetails,},
                    {title: 'contacts', path: PATH_DASHBOARD.setup.employees.contacts,},
                    {title: 'family details', path: PATH_DASHBOARD.setup.employees.familyDetails,},
                    {title: 'work history', path: PATH_DASHBOARD.setup.employees.workHistory,},
                    {title: 'statutory details', path: PATH_DASHBOARD.setup.employees.statutoryDetails,},
                    {title: 'nomination details', path: PATH_DASHBOARD.setup.employees.nominationsDetails,},
                    {title: 'biometric information', path: PATH_DASHBOARD.setup.employees.biometricInformation,},
                    {title: 'education details', path: PATH_DASHBOARD.setup.employees.educationDetails,},
                    // {title: 'training & certifications', path: PATH_DASHBOARD.setup.employees.trainingCertifications,},
                    {title: 'skills', path: PATH_DASHBOARD.setup.employees.skills,},
                    // {title: 'positions', path: PATH_DASHBOARD.setup.employees.positions,},
                    {title: 'alias company setup', path: PATH_DASHBOARD.setup.employees.aliasCompanySetup,},
                ],
            },
            {
                title: 'policy setup',
                path: PATH_DASHBOARD.setup.policy.self,
                icon: ICONS.policySetup,
                roles: [11],
                children: [
                    {title: 'leave', path: PATH_DASHBOARD.setup.policy.leave},
                    {title: 'shifts', path: PATH_DASHBOARD.setup.policy.shifts},
                    {title: 'holidays', path: PATH_DASHBOARD.setup.policy.holidays},
                    {title: 'Company policies', path: PATH_DASHBOARD.setup.policy.companyPolicies,},
                ],
            },
            {
                title: 'payroll setup',
                path: PATH_DASHBOARD.setup.payroll.self,
                icon: ICONS.payroll,
                roles: [2, 3, 4],
                children: [
                    {title: 'salary components', path: PATH_DASHBOARD.setup.payroll.components, roles: [2]},
                    {title: 'salary details', path: PATH_DASHBOARD.setup.payroll.salaryDetails, roles: [3]},
                    {title: 'compliance', path: PATH_DASHBOARD.setup.payroll.compliance, roles: [3]},
                    {title: 'payroll groups', path: PATH_DASHBOARD.setup.payroll.payrollGroups, roles: [4]},
                    {title: 'loans & advance', path: PATH_DASHBOARD.setup.payroll.loanAndAdvances, roles: [2],},
                    // { title: 'loan & advance', path: PATH_DASHBOARD.setup.payroll.loanAndAdvances, roles: [4] },
                    // { title: 'salary templates', path: PATH_DASHBOARD.setup.payroll.salaryTemplates },
                    // { title: 'employee benefits', path: PATH_DASHBOARD.setup.payroll.employeeBenefits },
                    // { title: 'reimbursements', path: PATH_DASHBOARD.setup.payroll.reimbursements },
                ],
            },
            {
                title: 'employee life cycle',
                path: PATH_DASHBOARD.setup.employeeLifeCycle.fullAndFinal,
                icon: ICONS.menuItem,
                // roles: [],
                children: [
                    // {title: 'absconding', path: PATH_DASHBOARD.setup.employeeLifeCycle.absconding},
                    {title: 'full and final', path: PATH_DASHBOARD.setup.employeeLifeCycle.fullAndFinal,},
                ],
            },
            {
                title: 'helpdesk',
                path: PATH_DASHBOARD.setup.helpdesk.self,
                icon: ICONS.helpdesk,
                roles: [17],
            },
            {
                title: 'template setup',
                path: PATH_DASHBOARD.setup.document.documentTemplates, // 'hrtech/dashboard/setup/document',
                icon: ICONS.templatesSetup,
                roles: [8],
            },
            {
                title: 'signature authority',
                path: PATH_DASHBOARD.setup.signature.signatureAuthority, // 'hrtech/dashboard/setup/signatureAuthority',
                icon: ICONS.signature,
                roles: [9],
            },
            {
                title: 'identity & access setup',
                path: PATH_DASHBOARD.setup.rolePermission.roleManagement,
                icon: ICONS.identityAccess,
                roles: [12],
                // children: [
                // { title: 'role types', path: PATH_DASHBOARD.setup.organization.basicSetup.roleTypes },
                // {
                //   title: 'permission management',
                //   path: PATH_DASHBOARD.setup.rolePermission.permissionManagement,
                // },
                // { title: 'role mapping', path: PATH_DASHBOARD.setup.rolePermission.roleMapping },
                // ],
            },
            {
                title: 'learning management',
                path: PATH_DASHBOARD.setup.learningManagement.category,
                icon: ICONS.lms,
                roles: [10],
                children: [
                    { title: 'learning-management', path: PATH_DASHBOARD.setup.learningManagement.category },
                ],
            },
            // {
            //     title: 'hiring', path: PATH_DASHBOARD.setup.hiring,
            //     icon: ICONS.hiring,
            //     children: [
            //         { title: 'hiring', path: PATH_DASHBOARD.setup.hiring },
            //     ],
            // },
        ],
    },

    // GENERAL
    // ----------------------------------------------------------------------
    /* {
          subheader: 'general',
          items: [
              {title: 'app', path: PATH_DASHBOARD.general.app, icon: ICONS.dashboard},
              {title: 'ecommerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce},
              {title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics},
              {title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking},
              {title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking},
              {title: 'file', path: PATH_DASHBOARD.general.file, icon: ICONS.file},
          ],
      }, */

    // MANAGEMENT
    // ----------------------------------------------------------------------
    /* {
          subheader: 'theme management',
          items: [
              // USER
              {
                  title: 'user',
                  path: PATH_DASHBOARD.user.root,
                  icon: ICONS.user,
                  children: [
                      {title: 'profile', path: PATH_DASHBOARD.user.profile},
                      {title: 'cards', path: PATH_DASHBOARD.user.cards},
                      {title: 'list', path: PATH_DASHBOARD.user.list},
                      {title: 'create', path: PATH_DASHBOARD.user.new},
                      {title: 'edit', path: PATH_DASHBOARD.user.demoEdit},
                      {title: 'account', path: PATH_DASHBOARD.user.account},
                  ],
              },

              // E-COMMERCE
              {
                  title: 'ecommerce',
                  path: PATH_DASHBOARD.eCommerce.root,
                  icon: ICONS.cart,
                  children: [
                      {title: 'shop', path: PATH_DASHBOARD.eCommerce.shop},
                      {title: 'product', path: PATH_DASHBOARD.eCommerce.demoView},
                      {title: 'list', path: PATH_DASHBOARD.eCommerce.list},
                      {title: 'create', path: PATH_DASHBOARD.eCommerce.new},
                      {title: 'edit', path: PATH_DASHBOARD.eCommerce.demoEdit},
                      {title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout},
                  ],
              },

              // INVOICE
              {
                  title: 'invoice',
                  path: PATH_DASHBOARD.invoice.root,
                  icon: ICONS.invoice,
                  children: [
                      {title: 'list', path: PATH_DASHBOARD.invoice.list},
                      {title: 'details', path: PATH_DASHBOARD.invoice.demoView},
                      {title: 'create', path: PATH_DASHBOARD.invoice.new},
                      {title: 'edit', path: PATH_DASHBOARD.invoice.demoEdit},
                  ],
              },

              // BLOG
              {
                  title: 'blog',
                  path: PATH_DASHBOARD.blog.root,
                  icon: ICONS.blog,
                  children: [
                      {title: 'posts', path: PATH_DASHBOARD.blog.posts},
                      {title: 'post', path: PATH_DASHBOARD.blog.demoView},
                      {title: 'create', path: PATH_DASHBOARD.blog.new},
                  ],
              },
              {
                  title: 'File manager',
                  path: PATH_DASHBOARD.fileManager,
                  icon: ICONS.folder,
              },
          ],
      },

    // APP
    // ----------------------------------------------------------------------
    /* {
          subheader: 'app',
          items: [
              {
                  title: 'mail',
                  path: PATH_DASHBOARD.mail.root,
                  icon: ICONS.mail,
                  info: <Label color="error">+32</Label>,
              },
              {
                  title: 'chat',
                  path: PATH_DASHBOARD.chat.root,
                  icon: ICONS.chat,
              },
              {
                  title: 'calendar',
                  path: PATH_DASHBOARD.calendar,
                  icon: ICONS.calendar,
              },
              {
                  title: 'kanban',
                  path: PATH_DASHBOARD.kanban,
                  icon: ICONS.kanban,
              },
          ],
      }, */

    // DEMO MENU STATES
    /* {
          subheader: 'Other cases',
          items: [
              {
                  // default roles : All roles can see this entry.
                  // roles: ['user'] Only users can see this item.
                  // roles: ['admin'] Only admin can see this item.
                  // roles: ['admin', 'manager'] Only admin/manager can see this item.
                  // Reference from 'src/guards/RoleBasedGuard'.
                  title: 'item_by_roles',
                  path: PATH_DASHBOARD.permissionDenied,
                  icon: ICONS.lock,
                  roles: ['ADMIN'],
                  caption: 'only_admin_can_see_this_item',
              },
              {
                  title: 'menu_level',
                  path: '#/dashboard/menu_level',
                  icon: ICONS.menuItem,
                  children: [
                      {
                          title: 'menu_level_2a',
                          path: '#/dashboard/menu_level/menu_level_2a',
                      },
                      {
                          title: 'menu_level_2b',
                          path: '#/dashboard/menu_level/menu_level_2b',
                          children: [
                              {
                                  title: 'menu_level_3a',
                                  path: '#/dashboard/menu_level/menu_level_2b/menu_level_3a',
                              },
                              {
                                  title: 'menu_level_3b',
                                  path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b',
                                  children: [
                                      {
                                          title: 'menu_level_4a',
                                          path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4a',
                                      },
                                      {
                                          title: 'menu_level_4b',
                                          path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4b',
                                      },
                                  ],
                              },
                          ],
                      },
                  ],
              },
              {
                  title: 'item_disabled',
                  path: '#disabled',
                  icon: ICONS.disabled,
                  disabled: true,
              },

              {
                  title: 'item_label',
                  path: '#label',
                  icon: ICONS.label,
                  info: (
                      <Label color="info" startIcon={<Iconify icon="eva:email-fill"/>}>
                          NEW
                      </Label>
                  ),
              },
              {
                  title: 'item_caption',
                  path: '#caption',
                  icon: ICONS.menuItem,
                  caption:
                      'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
              },
              {
                  title: 'item_external_link',
                  path: 'https://www.google.com/',
                  icon: ICONS.external,
              },
              {
                  title: 'blank',
                  path: PATH_DASHBOARD.blank,
                  icon: ICONS.blank,
              },
          ],
      }, */
];

export default navConfig;
