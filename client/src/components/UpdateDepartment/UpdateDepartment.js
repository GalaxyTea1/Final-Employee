import React from 'react';
import TableDepartment from '../Table/TableDepartment';

function UpdateDepartment({ item }) {
    // const [department_name, setDepartment_Name] = useState(item.department_name);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            // const body = { department_name };
            const res = await fetch(`http://localhost:5000/departments/${item.department_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify(body),
            });
            if (res.status === 200) {
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <div>
            <TableDepartment />
        </div>
    );
}

export default UpdateDepartment;
