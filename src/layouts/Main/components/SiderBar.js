import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import config from '../../../constants/config';

const { Sider } = Layout;

const menus = [
    { key: '1', name: 'Dashboard', to: '/', icon: "pie-chart" },
    { key: '2', name: 'Users', to: '/users', icon: 'user' },
]

const SiderBar = props => {
    const selected = menus.reduce((p, c) => props.location.pathname.indexOf(c.to) !== -1 ? c : p, menus[0])

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={props.isCollapsed}
            breakpoint="lg"
            width={256}
            collapsedWidth="80"
            onCollapse={props.onCollapse}
        >
            <div className='sider-bar-logo' id="logo">
                <Link to="/">
                    <img src={config.logo} alt="logo" />
                    <h1>{config.name}</h1>
                </Link>
            </div>
            <Menu
                selectedKeys={selected ? selected.key : ['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
            >
                {menus.map(menu => (
                    <Menu.Item key={menu.key}>
                        <Icon type={menu.icon} />
                        <span>{menu.name}</span>
                        <Link to={menu.to} />
                    </Menu.Item>
                ))}

                {/* <Menu.Item key="3">
                    <Icon type="inbox" />
                    <span>Option 3</span>
                </Menu.Item>
                <Menu.SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>Navigation One</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="appstore" />
                            <span>Navigation Two</span>
                        </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.SubMenu key="sub3" title="Menu.SubMenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </Menu.SubMenu>
                </Menu.SubMenu> */}
            </Menu>
        </Sider>
    )
}

export default withRouter(SiderBar);
