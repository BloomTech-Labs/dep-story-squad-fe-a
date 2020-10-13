import React, { useState } from 'react';
import './Header.less';
import { connect } from 'react-redux';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Header = props => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  return (
    <div className="header-component">
      {props.student_id && !navDrawerOpen && (
        <MenuOutlined
          className="menu-icon"
          onClick={() => setNavDrawerOpen(!navDrawerOpen)}
        />
      )}
      <Drawer
        placement="top"
        onClose={() => setNavDrawerOpen(false)}
        visible={navDrawerOpen}
        height="229"
        style={{
          textAlign: 'center',
        }}
        drawerStyle={{}}
        headerStyle={{
          fontFamily: 'Bangers',
          backgroundColor: '#6CEAE6',
          fontSize: '50px',
          display: 'hidden',
        }}
        bodyStyle={{
          backgroundColor: '#6CEAE6',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '2rem',
          color: 'black',
          overflow: 'hidden',
        }}
      >
        <Link to="/child-dashboard">Home</Link>
        <Link to="/">Help</Link>
        <Link to="/">Change User</Link>
        <Link to="/">Logout</Link>
      </Drawer>
      <h1>{props.title}</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    student_id: state.childReducer.student_id,
  };
};

export default connect(mapStateToProps, {})(Header);
