export const navigation = [
  {
    title: "List Employee",
    children: [
      {
        title: "Add Employee",
        path: "add-employee",
        exact: true,
      },
      {
        title: "Update Employee",
        path: "update-employee",
        exact: true,
      },
    ],
  },
  {
    title: "Department",
    children: [
      {
        title: "Add Department",
        path: "add-department",
        exact: true,
      },
      {
        title: "Update Department",
        path: "update-department",
        exact: true,
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
