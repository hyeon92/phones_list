import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './SideMenu.css'

class SideMenu extends Component {

  state = {
    collapsible: false
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout.Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Icon type="bars" />
            <span>List</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="star" />
            <span>Favorite List</span>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  }
}

export default SideMenu;