import Dashboard from "../container/dashBoard"
import UserList from "../container/userList";
import Portfolio from "./profile";
import Chat from "./chat";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import { useNavigate, Link, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { resetDetails } from '../reducers/userSlice'
const { Header, Sider, Content } = Layout;
const SideNav = () => {
  const { name} = useSelector(state => state.user)
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (

    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <img src={require('../uploads/card_img.jpg')}/>
        </div>
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
              label: <h3>My Profile</h3>,
            },
            {
              key: '/userlist',
              icon: <VideoCameraOutlined />,
              label: <h3>Fellow Users</h3>,
            },
            {
              key: '/chat',
              icon: <UploadOutlined />,
              label: <h3>My Messages</h3>,
            },
            {
              key: 'logout',
              icon: <UploadOutlined />,
              label: <h3>Logout</h3>,
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
            margin: '20px 20px',
            padding: 24,
            minHeight: 525,
            background: colorBgContainer,
          }}
        >
          {/* <h3>Welcome, {name}</h3> */}
          <Routes>
          {/* <Route exact path='/' element={<Login/>}/> */}
        {/* <Route exact path='/dashboard' element={<Dashboard/>}/> */}
        <Route exact path='/userlist' element={<UserList/>}/>
        <Route exact path='/profile' element={<Portfolio/>}/>
        <Route exact path='/chat' element={<Chat/>}/>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default SideNav;


