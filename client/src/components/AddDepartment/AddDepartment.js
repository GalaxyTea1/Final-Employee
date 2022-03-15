import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function AddDepartment() {
    const [department_name, setDepartment_Name] = useState('');
    const [form] = Form.useForm();

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { department_name };
            const res = await fetch('http://localhost:5000/departments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            if (res.status === 200) {
                toast.success('Add Department Success');
                form.resetFields();
            } else {
                toast.error(`Error: ${res.status}`);
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
                form={form}
            >
                <Form.Item label='Department' name='Department' rules={[{ required: true }]}>
                    <Input
                        value={department_name}
                        onChange={(e) => setDepartment_Name(e.target.value)}
                    />
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

export default AddDepartment;
