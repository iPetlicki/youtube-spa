import React, { useState } from 'react';
import {Image, Layout, Space, Menu, Button, Input, Typography} from 'antd';
import type { MenuProps } from 'antd';


const { Header, Content } = Layout;
const { Search } = Input;
const { Title } = Typography;


const items: MenuProps['items'] = [
    {
        label: 'Search',
        key: 'search',
    },
    {
        label: 'Favorites',
        key: 'favorites',
    },
];

const headerStyle: React.CSSProperties = {
    padding: '0 200px',
    textAlign: 'center',
    color: '#108ee9',
    height: 80,
    lineHeight: '80px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    backgroundColor: '#fafafa',
    height: 'calc(100vh - 80px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '20px',
    paddingTop: 200
};

const MainPage = () => {
    const [current, setCurrent] = useState('search');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
                <Header style={headerStyle}>
                    <div style={{width: '240px',display: 'flex', justifyContent: 'space-between'}}>
                        <Image
                            preview={false}
                            width={50}
                            src='assets/youtube.png'
                        />
                        <Menu
                            onClick={onClick}
                            selectedKeys={[current]}
                            mode="horizontal"
                            items={items}
                            style={{width: '160px', borderBottom: 'none'}}
                        />
                    </div>
                    <Button type='primary'>Log out</Button>
                </Header>
                <Content style={contentStyle}>
                    <Title level={2}>Search video</Title>
                    <Search
                        placeholder="What do you want to watch today?"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{width: '40vw'}}
                    />
                </Content>
            </Layout>
        </Space>
    );
};

export default MainPage;