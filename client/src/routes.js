import AddDepartment from './components/AddDepartment/AddDepartment';
import AddEmployee from './components/AddEmployee/AddEmployee';
import UpdateDepartment from './components/UpdateDepartment/UpdateDepartment';
import UpdateEmployee from './components/UpdateEmployee/UpdateEmployee';

export const routes = [
    { path: '/add-employee', exact: true, component: <AddEmployee /> },
    { path: '/update-employee', exact: true, component: <UpdateEmployee /> },
    { path: '/edit-employee', exact: true, component: <AddEmployee /> },
    { path: '/add-department', exact: true, component: <AddDepartment /> },
    { path: '/update-department', exact: true, component: <UpdateDepartment /> },
];
