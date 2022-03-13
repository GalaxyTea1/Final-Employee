import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';

function AddDepartment() {
    const [department_name, setDepartment_Name] = useState('');
    const [department, setDepartment] = useState('');

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
                alert('Thêm thành công');
            } else {
                alert(`Lỗi ${res.tatus}. Vui lòng kiểm tra lại`);
            }
            setDepartment_Name('');
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
                <Form.Item label='Department' name='Department' rules={[{ required: true }]}>
                    <Input value={department} onChange={(e) => setDepartment(e.target.value)} />
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
