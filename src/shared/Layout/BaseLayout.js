import React from 'react'
import { Layout, Menu, Typography } from 'antd';
import Dashboard from '../Dashboard';
const { Header, Content, Footer } = Layout;

export const BaseLayout = () => {
  return (
    <Layout>
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#4764CD'
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="light"
        mode="horizontal"
        style={{
          backgroundColor: 'transparent'
        }}
        items={[
          {
          key: '1',
          label: <Typography.Title style={{color: '#fffffe', margin: 0}} level={4}>Admin Dashboard</Typography.Title>,
          }
        ]}
      />
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0',
      }}
    >
      <div
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
     <Dashboard/>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
    </Footer>
  </Layout>
  )
}
