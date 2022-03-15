import React from 'react';
import { useParams } from 'react-router-dom';
import TableEditDepartment from '../Table/TableEditDepartment';

function EditDepartment() {
    const { id } = useParams();
    return (
        <div>
            <TableEditDepartment id={id} />
        </div>
    );
}

export default EditDepartment;
