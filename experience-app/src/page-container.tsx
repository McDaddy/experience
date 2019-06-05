import * as React from 'react';
import { Menu, Icon, Layout } from 'antd';

import './page-container.scss';
import { Link } from 'react-router-dom';

export interface IProps {}

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class PageContainer extends React.PureComponent<IProps, any> {
  public render() {
    return (
      <Layout className="page-container">
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            className="menu"
          >
            <Menu.Item key="1">Home</Menu.Item>
            {/* <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item> */}
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="sider">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              selectedKeys={['/experience/react-hooks/hook-useRef']}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="laptop" />
                    React Hooks
                  </span>
                }
              >
                <Menu.Item key="/experience/react-hooks/hook-closure">
                  <Link to="/experience/react-hooks/hook-closure">Hooks与闭包</Link>
                </Menu.Item>
                <Menu.Item key="/experience/react-hooks/hook-useRef">
                  <Link to="/experience/react-hooks/hook-useRef">useRef</Link>
                </Menu.Item>
              </SubMenu>
              {/* <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    subnav 2
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu> */}
              {/* <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu> */}
            </Menu>
          </Sider>
          <Layout className="content-layout">
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: '100vh',
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export { PageContainer };
