import React, { useEffect, useState } from "react";
import { Space, Table } from "antd";

function TableDepartment() {
  const [departmentItem, setDepartmentItem] = useState([]);

  const getDepartments = async () => {
    try {
      const res = await fetch("http://localhost:5000/departments");
      const data = await res.json();
      setDepartmentItem(data.department);
    } catch (error) {}
  };

  useEffect(() => {
    getDepartments();
  }, []);

  async function handleDelete(id) {
    try {
      const res = await fetch(`http://localhost:5000/departments/${id}`, {
        method: "DELETE",
      });
      getDepartments();
    } catch (error) {
      console.log(error.message);
    }
  }

  const deleteEmployee = (e) => {
    handleDelete(e.department_id);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "department_id",
      key: "department_id",
    },
    {
      title: "Department",
      dataIndex: "department_name",
      key: "department_name",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size='middle'>
          <button className='bg-[#218bff] w-14 rounded-[4px] text-white font-semibold'>Edit</button>
          <button
            className='bg-[#ff5f56] w-14 rounded-[4px] text-white font-semibold'
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
      <Table columns={columns} dataSource={departmentItem} />
    </div>
  );
}

export default TableDepartment;
