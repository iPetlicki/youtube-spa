import React from 'react';
import {Col,Row, Button, Form, Input, Typography, Image} from 'antd';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const { Title } = Typography;

const LoginPage: React.FC = () => {

    return (
        <Row justify='space-around' align='middle' style={{height: '100vh'}}>
            <Col span={6} style={{border: '1px solid lightGray', borderRadius: '10px', paddingTop: 20}}>
                <Image
                    preview={false}
                    width={100}
                    src='assets/youtube.png'
                />
                <Title level={3}>Log In</Title>
                <Form
                    name="basic"
                    labelCol={{span: 6}}
                    wrapperCol={{span: 16}}
                    style={{maxWidth: 600}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>

                        label="Username"
                        name="username"
                        rules={[{required: true, message: 'Please input your username!'}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 0, span: 24}}>
                        <Button type="primary" htmlType="submit">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}

export default LoginPage;
