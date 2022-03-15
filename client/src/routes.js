import AddDepartment from './components/AddDepartment/AddDepartment';
import AddEmployee from './components/AddEmployee/AddEmployee';
import UpdateDepartment from './components/UpdateDepartment/UpdateDepartment';
import UpdateEmployee from './components/UpdateEmployee/DeleteEmployee';
import EditEmployee from './components/UpdateEmployee/EditEmployee';

export const routes = [
    { path: '/add-employee', exact: true, component: <AddEmployee /> },
    { path: '/update-employee', exact: true, component: <UpdateEmployee /> },
    { path: '/add-department', exact: true, component: <AddDepartment /> },
    { path: '/update-department', exact: true, component: <UpdateDepartment /> },
    { path: '/edit-employee/:id', exact: true, component: <EditEmployee /> },
];
