import React from 'react';
import { useParams } from 'react-router-dom';
import TableEditEmployee from '../Table/TableEditEmployee';

function EditEmployee() {
    const { id } = useParams();
    return (
        <div>
            <TableEditEmployee id={id} />
        </div>
    );
}

export default EditEmployee;
