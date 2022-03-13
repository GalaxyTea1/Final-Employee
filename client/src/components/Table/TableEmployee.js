import { Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';

function TableEmployee() {
    const [employeeItem, setEmployeeItem] = useState([]);

    const getEmployees = async () => {
        try {
            const res = await fetch('http://localhost:5000/employees');
            const data = await res.json();
            setEmployeeItem(data.employee);
        } catch (error) {}
    };

    useEffect(() => {
        getEmployees();
    }, []);

    async function handleDelete(id) {
        try {
            const res = await fetch(`http://localhost:5000/employees/${id}`, {
                method: 'DELETE',
            });
            getEmployees();
        } catch (error) {
            console.log(error.message);
        }
    }

    const deleteEmployee = (e) => {
        handleDelete(e.employee_id);
        console.log(e);
    };

    const columns = [
        {
            title: 'First Name',
            dataIndex: 'firstname',
            key: 'employee_id',
        },
        {
            title: 'Last Name',
            dataIndex: 'lastname',
            key: 'lastname',
        },
        {
            title: 'Department',
            dataIndex: 'department_name',
            key: 'department_name',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size='middle'>
                    <button className='bg-[blue] w-14 rounded-[4px] text-white'>Edit</button>
                    <button
                        className='bg-[red] w-14 rounded-[4px] text-white'
                        onClick={() => deleteEmployee(record)}
                    >
                        Delete
                    </button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={employeeItem} />
        </div>
    );
}

export default TableEmployee;
