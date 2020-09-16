import React from 'react';
import { Layout } from 'antd';
import { ParentNavBar } from '../../common';
import RenderParentDashboard from './RenderParentDashboard';
import './ParentDashboard.less';

const { Sider } = Layout;

const ParentDashboardContainer = () => {
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
          <ParentNavBar highlight="dashboard" />
        </Sider>
        <RenderParentDashboard />
      </Layout>
    </div>
  );
};

export default ParentDashboardContainer;
