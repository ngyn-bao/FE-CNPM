import React, { useEffect, useState } from "react";
import {
  CalendarOutlined,
  DesktopOutlined,
  HomeOutlined,
  InboxOutlined,
  QrcodeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import UserHeader from "../../components/UserHeader/UserHeader";
import { path } from "../../common/path";
const { Content, Footer, Sider } = Layout;

const UserTemplate = () => {
  const location = useLocation();

  const getMenuKey = (pathname) => {
    switch (pathname) {
      case path.homePage:
        return "1";
      case path.datCho:
        return "2";
      case path.datThietBi:
        return "3";
      case path.quetQr:
        return "4";
      case path.lichSu:
        return "5";
      default:
        return "1";
    }
  };

  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState(getMenuKey(location.pathname));

  useEffect(() => {
    setSelectedKey(getMenuKey(location.pathname));
  }, [location.pathname]);

  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: <Link to={path.homePage}>Trang chủ</Link>,
    },
    {
      key: "2",
      icon: <CalendarOutlined />,
      label: <Link to={path.datCho}>Đặt chỗ</Link>,
    },
    {
      key: "3",
      icon: <DesktopOutlined />,
      label: <Link to={path.datThietBi}>Đặt thiết bị</Link>,
    },
    {
      key: "4",
      icon: <QrcodeOutlined />,
      label: <Link to={path.quetQr}>Quét QR</Link>,
    },
    {
      key: "5",
      icon: <InboxOutlined />,
      label: <Link to={path.lichSu}>Lịch sử đăng kí</Link>,
    },
  ];

  // const itemsUser = [
  //   {
  //     key: "2",
  //     icon: <CalendarOutlined />,
  //     label: <Link to={path.datCho}>Đặt chỗ</Link>,
  //   },
  //   {
  //     key: "3",
  //     icon: <DesktopOutlined />,
  //     label: <Link to={path.datThietBi}>Đặt thiết bị</Link>,
  //   },
  //   {
  //     key: "4",
  //     icon: <QrcodeOutlined />,
  //     label: <Link to={path.quetQr}>Quét QR</Link>,
  //   },
  //   {
  //     key: "5",
  //     icon: <InboxOutlined />,
  //     label: <Link to={path.lichSu}>Lịch sử đăng kí</Link>,
  //   },
  // ];

  // if (infoUser) {
  //   items.push(...itemsUser);
  // }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        style={{ paddingTop: "64px" }}
        className="uppercase"
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="light"
          defaultSelectedKeys={[selectedKey]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <UserHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content style={{ margin: "0 16px", paddingTop: "64px" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          ©{new Date().getFullYear()} Created by DeepTry Group
        </Footer>
      </Layout>
    </Layout>
  );
};
export default UserTemplate;
