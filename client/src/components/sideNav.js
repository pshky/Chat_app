import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import React, { useState } from 'react';
  import { useSelector } from 'react-redux';
  import {useNavigate,Link} from "react-router-dom";

  const { Header, Sider, Content } = Layout;
  const SideNav = () => {
    const {name} = useSelector(state=> state.user)
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate()
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
          onClick={({key})=>{
            if(key === "signout"){
              // 
            }else{
              navigate(key)
            }
          }}
            theme="light"
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
            ]}
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
//   #components-layout-demo-custom-trigger .trigger {
//     padding: 0 24px;
//     font-size: 18px;
//     line-height: 64px;
//     cursor: pointer;
//     transition: color 0.3s;
//   }
  
//   #components-layout-demo-custom-trigger .trigger:hover {
//     color: #1890ff;
//   }
  
//   #components-layout-demo-custom-trigger .logo {
//     height: 32px;
//     margin: 16px;
//     background: rgba(255, 255, 255, 0.3);
//   }