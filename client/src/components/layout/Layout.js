import { UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { navigation } from "./navigation";
import RootContent from "./RootContent";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function LayoutHome({ setAuth }) {
  let navigate = useNavigate();

  const handleLogout = (e) => {
    // e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <Layout>
        <Header className='header relative'>
          <div className='logo'>
            <h3 className='text-white'>Logo</h3>
          </div>
          <Menu theme='dark' mode='horizontal'>
            <Menu.Item key='1'>Home</Menu.Item>
            <Menu.Item key='2'>Contact</Menu.Item>
            <Menu.Item key='3'>About</Menu.Item>
            <Menu.Item key='4' className='' onClick={() => handleLogout()}>
              Logout
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className='site-layout-background'>
            <Menu mode='inline' style={{ height: "100%", borderRight: 0 }}>
              {navigation &&
                navigation.map((value, index) => (
                  <SubMenu key={index} icon={<UserOutlined />} title={value.title}>
                    {value.children.map((value1, index1) => (
                      <Menu.Item key={"sub" + index + "-" + index1}>
                        <Link to={value1.path} exact='true'>
                          {value1.title}
                        </Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ))}
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <RootContent />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutHome;
