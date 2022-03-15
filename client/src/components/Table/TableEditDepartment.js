import { Button, Form, Input, Select } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function TableEditDepartment({ id }) {
    const [department_name, setDepartment_Name] = useState([]);
    const [value, setValue] = useState([]);

    let navigate = useNavigate();

    const [form] = Form.useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/departments/${id}`)
            .then((res) => res.json())
            .then((result) => {
                setValue(result.department);
            });
    }, [id]);

    const onSubmitForm = async (e) => {
        form.validateFields();
        form.resetFields();
        try {
            const data = { department_name };
            const res = await fetch(`http://localhost:5000/departments/${value.department_id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (res.status === 200) {
                toast.success('Update Department Success');
                navigate('/home/update-department');
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
                    <Form.Item label='Department' name='Firstname' rules={[{ required: true }]}>
                        <Input
                            name='firstname'
                            value={department_name}
                            placeholder={value.department_name}
                            onChange={(e) => setDepartment_Name(e.target.value)}
                        />
                    </Form.Item>

                    <Button type='primary' onClick={onSubmitForm}>
                        Submit
                    </Button>
                </Form>
            </Content>
        </>
    );
}

export default TableEditDepartment;
