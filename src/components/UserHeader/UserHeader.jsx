import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { path } from "../../common/path";
import UserIcon from "../Icons/UserIcon";
import LogOutIcon from "../Icons/LogOutIcon";

const { Header } = Layout;

const UserHeader = ({ collapsed, setCollapsed }) => {
  const items = [
    {
      label: (
        <Link className="flex space-x-2 items-center">
          <UserIcon color="orange" />
          <span>Thông tin cá nhân</span>
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link className="flex space-x-2 items-center">
          <LogOutIcon color="orange" />
          <span>Đăng xuất</span>
        </Link>
      ),
      key: "1",
    },
  ];

  const checkUserLogin = () => {
    return infoUser ? (
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Avatar className="cursor-pointer hover:bg-orange-500 duration-300">
          {/* {infoUser.user.name.slice(0, 1)} */}
        </Avatar>
      </Dropdown>
    ) : (
      <>
        <Link
          to={path.signIn}
          className="py-2 px-4 rounded-md hover:bg-gray-200 duration-300"
        >
          Đăng kí
        </Link>
        <Link
          to={path.signUp}
          className="py-2 px-4 rounded-md text-green-500 border-green-500 hover:bg-green-500 hover:text-white duration-300"
        >
          <button className="py-2 px-4 bg-blue-900 text-white rounded-md">
            Đăng nhập
          </button>
        </Link>
      </>
    );
  };

  return (
    <Header
      className="w-full h-20 flex items-center justify-between"
      style={{
        backgroundColor: "#0a529c",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "64px",
        zIndex: 1000,
      }}
    >
      <div className="header_icons flex items-center justify-between">
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setCollapsed(!collapsed)}
        />
        <div className="header_logo">
          <Link to={path.homePage}>
            <img
              src="/logoBachKhoa.png"
              className="w-24 h-16"
              alt="Bách Khoa Logo"
            />
          </Link>
        </div>
      </div>
      <div className="header_navigate">
        <Link
          to={path.signIn}
          className="py-2 px-4 rounded-md text-white hover:text-yellow-400 duration-300 uppercase"
        >
          Đăng kí
        </Link>
        <Link
          to={path.signUp}
          className="py-2 px-4 rounded-md text-white bg-blue-900 border-blue-900 hover:bg-white hover:text-blue-900 duration-400 uppercase"
        >
          Đăng nhập
        </Link>
      </div>
    </Header>
  );
};

export default UserHeader;
