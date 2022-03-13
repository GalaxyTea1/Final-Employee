import { Button, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';

function AddEmployee() {
    const [department_id, setDepartment_Id] = useState();
    const [departmentItem, setDepartmentItem] = useState([]);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [form] = Form.useForm();
    const { Option } = Select;
    const handleChange = (e) => {
        setDepartment_Id(e);
    };

    useEffect(() => {
        fetch('http://localhost:5000/departments')
            .then((res) => res.json())
            .then((result) => {
                setDepartmentItem(result.department);
            });
    }, []);

    const onSubmitForm = async (e) => {
        e.preventDefault();
        form.validateFields();
        try {
            const data = { firstname, lastname, email, department_id };
            const res = await fetch('http://localhost:5000/employees', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            console.log(res);

            if (res.status === 200) {
                setDepartment_Id('');
                setFirstname('');
                setLastname('');
                setEmail('');
            } else {
                alert('Error: ' + res.statusText);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <Form
                name='wrap'
                labelCol={{ flex: '110px' }}
                labelAlign='left'
                labelWrap
                wrapperCol={{ flex: 1 }}
                colon={false}
            >
                <Form.Item label='FirstName' name='Firstname'>
                    <Input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                </Form.Item>

                <Form.Item label='LastName' name='Lastname' rules={[{ required: true }]}>
                    <Input value={lastname} onChange={(e) => setLastname(e.target.value)} />
                </Form.Item>

                <Form.Item label='Email' name='Email' rules={[{ required: true }]}>
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>

                <Form.Item label='Department' name='Department' rules={[{ required: true }]}>
                    <Select onChange={handleChange} style={{ width: 120 }} value={department_id}>
                        {departmentItem.map((item, index) => {
                            return (
                                <Option key={index} value={item.department_id}>
                                    {item.department_name}
                                </Option>
                            );
                        })}
                    </Select>
                </Form.Item>

                <Form.Item label=' '>
                    <Button type='primary' onClick={onSubmitForm}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default AddEmployee;
