import React, { useEffect, useState } from 'react';
import { Space, Table } from 'antd';

function TableDepartment() {
    const [departmentItem, setDepartmentItem] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/departments')
            .then((res) => res.json())
            .then((result) => {
                setDepartmentItem(result.department);
            });
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'department_id',
            key: 'department_id',
        },
        {
            title: 'Department',
            dataIndex: 'department_name',
            key: 'department_name',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space size='middle'>
                    <button className='bg-[blue] w-14 rounded-[4px] text-white'>Edit</button>
                    <button className='bg-[red] w-14 rounded-[4px] text-white'>Delete</button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={departmentItem} />
        </div>
    );
}

export default TableDepartment;
