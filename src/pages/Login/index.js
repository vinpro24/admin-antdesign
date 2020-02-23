import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Redirect } from 'react-router-dom'

import config from '../../constants/config'
import { AppContext } from '../../context'

const Login = props => {
    const context = React.useContext(AppContext)
    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();

        props.form.validateFields((err, values) => {
            if (!err) {
                // context.set(values.username, values.password, values.remember)
                console.log('Received values of form: ', values);
            }
        });
    }

    if (context.isAuth) {
        return <Redirect to={'/'} />
    }

    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <div style={{ marginTop: 50, marginBottom: 30 }}>
                <img alt="logo" className='login-logo' src={config.logo} />
                <span className='login-title'>{config.name}</span>
            </div>
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className="login-form-forgot" href="">
                    Forgot password
                </a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
            </Button>
                Or <a href="">register now!</a>
            </Form.Item>
        </Form>
    )
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedNormalLoginForm;
