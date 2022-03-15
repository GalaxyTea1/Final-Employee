import { Button, Form, Input, Select } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function TableEditEmployee({ id }) {
    const [departmentItem, setDepartmentItem] = useState([]);
    const [department_id, setDepartment_Id] = useState();
    const initialState = {
        firstname: '',
        lastname: '',
        email: '',
    };
    let navigate = useNavigate();

    const [values, setValues] = useState(initialState);
    const [form] = Form.useForm();
    const { Option } = Select;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleChangeSelect = (e) => {
        setDepartment_Id(e);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/employees/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setValues(result.employee);
            });
    }, [id]);

    useEffect(() => {
        fetch('http://localhost:5000/departments')
            .then((res) => res.json())
            .then((result) => {
                setDepartmentItem(result.department);
            });
    }, []);

    const onSubmitForm = async (e) => {
        form.validateFields();
        form.resetFields();
        try {
            const data = { ...values, department_id };
            const res = await fetch(`http://localhost:5000/employees/${values.employee_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.status === 200) {
                toast.success('Update Employee Success');
                navigate('/home/update-employee');
            } else {
                toast.success(`Error: ${res.statusText}`);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <Content
                className='site-layout-background'
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
            >
                <Form
                    name='wrap'
                    labelCol={{ flex: '110px' }}
                    labelAlign='left'
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                    form={form}
                >
                    <Form.Item label='FirstName' name='Firstname' rules={[{ required: true }]}>
                        <Input
                            name='firstname'
                            placeholder={values.firstname}
                            onChange={handleChange}
                        />
                    </Form.Item>

                    <Form.Item label='LastName' name='Lastname' rules={[{ required: true }]}>
                        <Input
                            name='lastname'
                            placeholder={values.lastname}
                            onChange={handleChange}
                        />
                    </Form.Item>

                    <Form.Item label='Email' name='Email' rules={[{ required: true }]}>
                        <Input name='email' placeholder={values.email} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item label='Department' name='Department' rules={[{ required: true }]}>
                        <Select
                            style={{ width: 120 }}
                            // value={department_id}
                            onChange={handleChangeSelect}
                            placeholder={values.department_name}
                        >
                            {departmentItem.map((item, index) => {
                                return (
                                    <Option key={index} value={item.department_id}>
                                        {item.department_name}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Form.Item>

                    <Button type='primary' onClick={onSubmitForm}>
                        Submit
                    </Button>
                </Form>
            </Content>
        </>
    );
}

export default TableEditEmployee;
