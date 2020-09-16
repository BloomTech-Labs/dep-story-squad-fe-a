import React from 'react';
import { Menu } from 'antd';
import './ParentNavBar.less';
import { useOktaAuth } from '@okta/okta-react';

const ParentNavBar = props => {
  const { authService } = useOktaAuth();

  return (
    <div>
      <Menu mode="inline" defaultSelectedKeys={[`${props.highlight}`]}>
        <Menu.Item key="dashboard">Dashboard</Menu.Item>
        <Menu.Item key="settings">Parent Settings</Menu.Item>
        <Menu.Item key="help">Help</Menu.Item>
        <Menu.Item key="logout" onClick={() => authService.logout()}>
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default ParentNavBar;
