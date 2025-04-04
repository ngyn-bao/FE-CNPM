import React from 'react';
import { Form, Input, Button, Card, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../../redux/slices/authSlice';
import './Login.scss';
import logo from '../../assets/images/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  // Redirect if already logged in
  React.useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  // Show error message if login fails
  React.useEffect(() => {
    if (error) {
      message.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const onFinish = (values) => {
    dispatch(loginUser(values))
      .unwrap()
      .then(() => {
        message.success('Login successful!');
        navigate('/');
      })
      .catch(() => {
        // Error is handled in the useEffect
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">
          <img src={logo} alt="HCMUT Logo" />
          <h1>Smart Learning Space Management System</h1>
        </div>
        
        <Card className="login-card" bordered={false}>
          <h2 className="login-title">Login to Your Account</h2>
          
          <Form
            name="login_form"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please enter your student ID!' }]}
            >
              <Input 
                prefix={<UserOutlined />} 
                placeholder="Student ID" 
                size="large"
              />
            </Form.Item>
            
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              
              <Link to="/forgot-password" className="login-form-forgot">
                Forgot password
              </Link>
            </Form.Item>
            
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="login-form-button"
                loading={loading}
                size="large"
                block
              >
                Log in
              </Button>
              Or <Link to="/register">register now!</Link>
            </Form.Item>

            <Form.Item className="login-demo-note">
              <div className="demo-credentials">
                <p><strong>Demo Credentials:</strong></p>
                <p>Username: student</p>
                <p>Password: password</p>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login; 