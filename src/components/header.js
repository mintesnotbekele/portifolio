import Layout from "antd/lib/layout/layout";
import { Header, Content } from "antd/lib/layout/layout";
import { Menu } from "antd";
import Banner from "./Home/banner";
import back  from "../assets/bac.jpg";
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
     <Layout  style={{width: '80%', margin : 'auto', color: 'white', background: 'rgba(52, 52, 52, 0.8)'}}>
    <Header
    style={{opacity: '0.9'}}
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
    <div >
      <div
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
       <Banner/>
      </div>
    </div>
 
  </Layout>
        </>
    )
}
export default Head;