import React from 'react';
import { Menu } from 'antd';
import './ParentNavBar.less';
import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';

const ParentNavBar = props => {
  const { authService } = useOktaAuth();

  return (
    <div>
      <Menu mode="inline" defaultSelectedKeys={[`${props.highlight}`]}>
        <Menu.Item key="dashboard">
          <Link to="/parent-dashboard">Dashboard</Link>
        </Menu.Item>

        <Menu.Item key="settings">
          <Link to="/parent-settings">Parent Settings</Link>
        </Menu.Item>

        <Menu.Item key="settings">
          <Link to="/">Choose User</Link>
        </Menu.Item>

        <Menu.Item key="help">Help</Menu.Item>
        <Menu.Item key="logout" onClick={() => authService.logout()}>
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ParentNavBar;
