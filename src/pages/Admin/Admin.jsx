import React from "react";
import { Layout, Menu, Card, Table, Tag, Button, Space } from "antd";
import {
  UserOutlined,
  BookOutlined,
  SettingOutlined,
  LogoutOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  SyncOutlined
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import "./Admin.scss";

const { Header, Sider, Content } = Layout;

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const menuItems = [
    {
      key: "dashboard",
      icon: <UserOutlined />,
      label: "Dashboard",
    },
    {
      key: "rooms",
      icon: <BookOutlined />,
      label: "Quản lý phòng",
    },
    {
      key: "equipment",
      icon: <SettingOutlined />,
      label: "Quản lý thiết bị",
    },
  ];

  const roomData = [
    {
      key: "1",
      building: "A1",
      room: "A1.01",
      type: "Cá nhân",
      status: "Đang sử dụng",
      user: "Nguyễn Văn A",
      time: "Tiết 1-3",
    },
    {
      key: "2",
      building: "B1",
      room: "B1.02",
      type: "Nhóm",
      status: "Đang chờ xử lý",
      user: "Trần Thị B",
      time: "Tiết 4-6",
    },
    {
      key: "3",
      building: "A2",
      room: "A2.03",
      type: "Nhóm",
      status: "Đã hoàn thành",
      user: "Lê Văn C",
      time: "Tiết 7-9",
    },
  ];

  const equipmentData = [
    {
      key: "1",
      name: "Microphone",
      quantity: 2,
      status: "Đã hoàn thành",
      user: "Nguyễn Văn A",
      time: "Tiết 1-3",
    },
    {
      key: "2",
      name: "Projector",
      quantity: 1,
      status: "Đang chờ xử lý",
      user: "Trần Thị B",
      time: "Tiết 4-6",
    },
    {
      key: "3",
      name: "Laptop",
      quantity: 1,
      status: "Đang sử dụng",
      user: "Lê Văn C",
      time: "Tiết 7-9",
    },
  ];

  const getStatusTag = (status) => {
    switch (status) {
      case "Đã hoàn thành":
        return (
          <Tag color="success" icon={<CheckCircleOutlined />}>
            {status}
          </Tag>
        );
      case "Đang chờ xử lý":
        return (
          <Tag color="processing" icon={<ClockCircleOutlined />}>
            {status}
          </Tag>
        );
      case "Đang sử dụng":
        return (
          <Tag color="warning" icon={<SyncOutlined spin />}>
            {status}
          </Tag>
        );
      default:
        return <Tag>{status}</Tag>;
    }
  };

  const roomColumns = [
    {
      title: "Tòa nhà",
      dataIndex: "building",
      key: "building",
    },
    {
      title: "Phòng",
      dataIndex: "room",
      key: "room",
    },
    {
      title: "Loại phòng",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => getStatusTag(status),
    },
    {
      title: "Người dùng",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link">Chi tiết</Button>
          <Button type="link" danger>
            Hủy
          </Button>
        </Space>
      ),
    },
  ];

  const equipmentColumns = [
    {
      title: "Thiết bị",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => getStatusTag(status),
    },
    {
      title: "Người dùng",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="link">Chi tiết</Button>
          <Button type="link" danger>
            Hủy
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Layout className="admin-layout">
      <Sider width={250} className="admin-sider">
        <div className="admin-logo">
          <h2>Admin Panel</h2>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          items={menuItems}
          className="admin-menu"
        />
        <div className="admin-logout" onClick={handleLogout}>
          <LogoutOutlined />
          <span>Đăng xuất</span>
        </div>
      </Sider>
      <Layout>
        <Header className="admin-header">
          <h1>Quản lý hệ thống</h1>
        </Header>
        <Content className="admin-content">
          <div className="admin-cards">
            <Card title="Quản lý phòng" className="admin-card">
              <Table
                columns={roomColumns}
                dataSource={roomData}
                pagination={false}
              />
            </Card>
            <Card title="Quản lý thiết bị" className="admin-card">
              <Table
                columns={equipmentColumns}
                dataSource={equipmentData}
                pagination={false}
              />
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin; 