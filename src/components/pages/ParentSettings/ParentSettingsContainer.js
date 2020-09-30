import React from 'react';
import { Layout } from 'antd';
import { ParentNavBar } from '../../common';
import RenderParentSettings from './RenderParentSettings';
import './ParentSettings.less';

const { Sider } = Layout;

const ParentSettingsContainer = () => {
  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{ height: '100vh' }}
        >
          <div className="logo">Welcome Back</div>
          <ParentNavBar highlight="settings" />
        </Sider>
        <RenderParentSettings />
      </Layout>
    </div>
  );
};

export default ParentSettingsContainer;
