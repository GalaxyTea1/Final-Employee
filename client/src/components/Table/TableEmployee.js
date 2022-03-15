import { Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TableEmployee() {
  const [employeeItem, setEmployeeItem] = useState([]);

  let navigate = useNavigate();

  const getEmployees = async () => {
    try {
      const res = await fetch("http://localhost:5000/employees");
      const data = await res.json();
      setEmployeeItem(data.employee);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  async function handleDelete(id) {
    try {
      const res = await fetch(`http://localhost:5000/employees/${id}`, {
        method: "DELETE",
      });
      getEmployees();
    } catch (error) {
      console.log(error.message);
    }
  }

  const deleteEmployee = (e) => {
    handleDelete(e.employee_id);
  };

  const editEmployee = (e) => {
    navigate("/edit-employee");
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "employee_id",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
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
          <button
            className='bg-[#218bff] w-14 rounded-[4px] text-white font-semibold'
            onClick={() => editEmployee(record)}
          >
            Edit
          </button>
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
      <Table columns={columns} dataSource={employeeItem} />
    </div>
  );
}

export default TableEmployee;
