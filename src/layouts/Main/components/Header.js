import React from 'react'

import { Layout, Dropdown, Menu, Icon, Avatar } from 'antd';
// import { Link } from 'react-router-dom';
// import config from '../../../constants/config';

const Header = ({ isCollapsed, onToggle }) => {
    const onMenuClick = (i) => {
        if (i.key === 'logout') {
            // context.logout()
        }
    }

    return (
        <Layout.Header style={{ background: '#fff', padding: 0 }}>
            <Icon
                className="toggle-icon"
                type={isCollapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={onToggle}
            />
            {/* <div style={{ flex: '1 1 0%' }}></div> */}
            <div className="header-right">
                <Dropdown
                    overlay={(
                        <Menu selectedKeys={[]} onClick={onMenuClick}>
                            <Menu.Item key="userCenter">
                                <Icon type="user" />
                                <span>Account Center</span>
                            </Menu.Item>
                            <Menu.Item key="userinfo">
                                <Icon type="setting" />
                                <span>Account Settings</span>
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item key="logout">
                                <Icon type="logout" />
                                <span>Logout</span>
                            </Menu.Item>
                        </Menu>
                    )}
                >
                    <span className='header-item'>
                        <Avatar size="small" style={{ margin: '20px 8px 20px 0' }} src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" />
                        <span>{'Admin'}</span>
                    </span>
                </Dropdown>
            </div>

        </Layout.Header>
    );
}

export default Header;
