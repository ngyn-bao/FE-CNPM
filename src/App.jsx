import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider, theme as antTheme } from 'antd';
import { useSelector } from 'react-redux';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import BookRoom from './pages/BookRoom/BookRoom';
import UserInfo from './pages/UserInfo/UserInfo';
import History from './pages/History/History';
import AboutSystem from './pages/AboutSystem/AboutSystem';
import Admin from './pages/Admin/Admin';
import Equipment from './pages/Equipment/Equipment';
import './App.scss';

const PrivateRoute = ({ children, roles }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

const App = () => {
  const theme = useSelector((state) => state.app.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const getThemeConfig = () => {
    const isDark = theme === 'dark';
    
    return {
      algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
      token: {
        colorPrimary: isDark ? '#3f51b5' : '#1a237e', // Lighter blue for dark mode
        colorInfo: isDark ? '#3f51b5' : '#1a237e',
        colorBgBase: isDark ? '#121212' : '#ffffff',
        colorTextBase: isDark ? '#ffffff' : '#333333',
        borderRadius: 8,
        colorBorder: isDark ? '#333333' : '#e0e0e0',
      },
      components: {
        Button: {
          colorPrimaryHover: isDark ? '#5c6bc0' : '#283593',
        },
        Card: {
          colorBgContainer: isDark ? '#1e1e1e' : '#ffffff',
          colorBorderSecondary: isDark ? '#333333' : '#f0f0f0',
          boxShadow: isDark ? '0 1px 2px rgba(0, 0, 0, 0.5)' : '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
        Menu: {
          colorItemBg: isDark ? '#1e1e1e' : '#ffffff',
          colorItemText: isDark ? '#ffffff' : '#333333',
        },
        Select: {
          colorBgElevated: isDark ? '#1e1e1e' : '#ffffff',
          colorText: isDark ? '#ffffff' : '#333333',
        },
        Dropdown: {
          colorBgElevated: isDark ? '#1e1e1e' : '#ffffff',
        }
      }
    };
  };

  return (
    <ConfigProvider theme={getThemeConfig()}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book-room" element={<BookRoom />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/history" element={<History />} />
        <Route path="/about-system" element={<AboutSystem />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute roles={["admin"]}>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </ConfigProvider>
  );
};

export default App;
