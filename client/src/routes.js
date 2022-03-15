import AddDepartment from './components/AddDepartment/AddDepartment';
import AddEmployee from './components/AddEmployee/AddEmployee';
import DeleteDepartment from './components/UpdateDepartment/DeleteDepartment';
import EditDepartment from './components/UpdateDepartment/EditDepartment';
import DeleteEmployee from './components/UpdateEmployee/DeleteEmployee';
import EditEmployee from './components/UpdateEmployee/EditEmployee';

export const routes = [
    { path: '/add-employee', exact: true, component: <AddEmployee /> },
    { path: '/update-employee', exact: true, component: <DeleteEmployee /> },
    { path: '/edit-employee/:id', exact: true, component: <EditEmployee /> },
    { path: '/add-department', exact: true, component: <AddDepartment /> },
    { path: '/update-department', exact: true, component: <DeleteDepartment /> },
    { path: '/edit-department/:id', exact: true, component: <EditDepartment /> },
];
