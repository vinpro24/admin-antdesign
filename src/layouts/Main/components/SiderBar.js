import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import config from '../../../constants/config';

const { Sider } = Layout;

const menus = [
    { key: '1', name: 'Dashboard', to: '/' },
    { key: '2', name: 'Users', to: '/users' }
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
                // defaultSelectedKeys={['2']}
                selectedKeys={selected ? selected.key : ['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
            >
                {menus.map(menu => (
                    <Menu.Item key={menu.key}>
                        <Icon type="pie-chart" />
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
            {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">
                        <Icon type="dashboard" />
                        <span>Dashboard</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/list">
                        <Icon type="unordered-list" />
                        <span>List</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                </Menu.Item>
                <Menu.Menu.SubMenu
                    key="sub1"
                    title={
                        <Menu.Item>
                            <Icon type="user" />
                            <span>Sub 1</span>
                        </Menu.Item>
                    }
                >
                    <Menu.Item key="sub1-1">option1</Menu.Item>
                    <Menu.Item key="sub1-2">option2</Menu.Item>
                    <Menu.Item key="sub1-3">option3</Menu.Item>
                    <Menu.Item key="sub1-4">option4</Menu.Item>
                </Menu.Menu.SubMenu>
            </Menu> */}
        </Sider>
    )
}

export default withRouter(SiderBar);
