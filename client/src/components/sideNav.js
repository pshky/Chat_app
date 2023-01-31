import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { resetDetails } from '../reducers/userSlice'
const { Header, Sider, Content } = Layout;
const SideNav = () => {
  const { name } = useSelector(state => state.user)
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (

    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          onClick={({ key }) => {
            if (key === "logout") {
              dispatch(resetDetails())
              navigate('/')
            } else {
              navigate(key)
            }
          }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/profile',
              icon: <UserOutlined />,
              label: 'My Profile',
            },
            {
              key: '/userlist',
              icon: <VideoCameraOutlined />,
              label: 'Fellow Users',
            },
            {
              key: '/messages',
              icon: <UploadOutlined />,
              label: 'My Messages',
            },
            {
              key: 'logout',
              icon: <UploadOutlined />,
              label: 'Logout',
            },
          ]
          }
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <h4>Welcome, {name}</h4>
        </Content>
      </Layout>
    </Layout>
  );
};
export default SideNav;


