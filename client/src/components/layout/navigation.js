export const navigation = [
    {
        title: 'List Employee',
        children: [
            {
                title: 'Add Employee',
                path: 'add-employee',
                exact: true,
            },
            {
                title: 'Update Employee',
                path: 'update-employee',
                exact: true,
            },
        ],
    },
    {
        title: 'Department',
        children: [
            {
                title: 'Add Department',
                path: 'add-department',
                exact: true,
            },
            {
                title: 'Update Department',
                path: 'update-department',
                exact: true,
            },
        ],
    },
    {
        title: 'User',
        children: [
            {
                title: 'Logout',
                path: 'logout',
                exact: true,
            },
        ],
    },
];
