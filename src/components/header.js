import Layout from "antd/lib/layout/layout";
import { Header, Content } from "antd/lib/layout/layout";
import { Menu } from "antd";
import Banner from "./Home/banner";

const Head = ()=>{

    const menuIttem = [

        'Home',
        'Skills',
        'Projects',
        'Tools',
        'About'  
      ];

    return (
        <>
           <Layout>
    <Header
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        items={menuIttem.map((value, key ) => ({
          label: value,
        }))}
      >
       
        </Menu>
    </Header>
    <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
       <Banner/>
      </div>
    </Content>
 
  </Layout>
        </>
    )
}
export default Head;