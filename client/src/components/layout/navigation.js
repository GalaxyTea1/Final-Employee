export const navigation = [
    {
        title: 'List Employee',
        children: [
            {
                title: 'Add Employee',
                path: 'add-employee',
                exact: true,
                link: 'Add-Employee',
            },
            {
                title: 'Update Employee',
                path: 'update-employee',
                exact: true,
                link: 'Update-Employee',
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
                link: 'Add-Department',
            },
            {
                title: 'Update Department',
                path: 'update-department',
                exact: true,
                link: 'Update-Department',
            },
        ],
    },
    // {
    //     title: 'Supervisor',
    //     children: [
    //         {
    //             title: 'Add Supervisor',
    //             path: 'add-supervisor',
    //             exact: true,
    //         },
    //     ],
    // },
];
