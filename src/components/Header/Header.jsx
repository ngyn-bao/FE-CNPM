import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select, Button, Dropdown, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined, MenuOutlined, BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage, setTheme } from '../../redux/slices/appSlice';
import './Header.scss';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const language = useSelector((state) => state.app.language);
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
    },
  ];

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="HCMUT Logo" />
        <span className="header__title">S3-MRS</span>
      </div>

      <nav className="header__nav">
        <Link to="/" className="header__nav-item">Home</Link>
        <Link to="/book-room" className="header__nav-item">Book Room</Link>
        <Link to="/equipment" className="header__nav-item">Equipment</Link>
        <Link to="/profile" className="header__nav-item">Profile</Link>
      </nav>

      <div className="header__actions">
        <Select
          value={language}
          onChange={(value) => dispatch(setLanguage(value))}
          options={[
            { value: 'en', label: 'English' },
            { value: 'vi', label: 'Tiếng Việt' },
          ]}
          className="header__language-select"
        />

        <Button 
          onClick={toggleTheme} 
          className="header__theme-toggle"
          type="text"
          icon={theme === 'light' ? <BulbOutlined /> : <BulbFilled />}
        >
          {theme === 'light' ? 'Dark' : 'Light'}
        </Button>

        {isLoggedIn ? (
          <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
            <Button className="header__user-button">
              <Avatar icon={<UserOutlined />} />
              <span className="header__user-name">User Name</span>
            </Button>
          </Dropdown>
        ) : (
          <Button type="primary" className="header__login-button">
            Login
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header; 