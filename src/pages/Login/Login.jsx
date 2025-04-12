import React, { useState } from "react";
import { Form, Input, Button, Card, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slices/authSlice";
import "./Login.scss";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Mock admin credentials
  const adminCredentials = {
    username: "admin",
    password: "admin123",
    role: "admin",
    name: "Admin User"
  };

  // Mock student credentials
  const studentCredentials = {
    username: "student",
    password: "student123",
    role: "student",
    name: "Student User"
  };

  const onFinish = (values) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (
        (values.username === adminCredentials.username && 
         values.password === adminCredentials.password) ||
        (values.username === studentCredentials.username && 
         values.password === studentCredentials.password)
      ) {
        const user = values.username === adminCredentials.username ? 
          adminCredentials : studentCredentials;
        
        dispatch(loginSuccess({
          username: user.username,
          role: user.role,
          name: user.name
        }));

        message.success("Login successful!");
        
        // Redirect based on role
        if (user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        message.error("Invalid username or password!");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login">
      <Card className="login__card">
        <h1 className="login__title">Login</h1>
        <p className="login__subtitle">
          Login to access the Smart Learning Space Management System
        </p>
        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Please enter your username!" },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please enter your password!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              block
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="login__demo-credentials">
          <h3>Demo Credentials:</h3>
          <p>Admin: username: admin, password: admin123</p>
          <p>Student: username: student, password: student123</p>
        </div>
      </Card>
    </div>
  );
};

export default Login; 