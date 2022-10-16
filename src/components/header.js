import Layout from "antd/lib/layout/layout";
import { Header, Content } from "antd/lib/layout/layout";
import { Menu } from "antd";
import Banner from "./Home/banner";
import back  from "../assets/bac.jpg";
import logo from "../assets/image.png";
const Head = ()=>{
   const logostyle = {
         height: '60px',
         width: '300px'
   }
    const items = {
      float: "right",
      color: "white"
    }
    const itemStyle={
      margin: "20px"
    }
   
    return (
        <>
     <Layout  style={{width: '80%', margin : 'auto', color: 'white', background: 'rgba(52, 52, 52, 0.8)'}}>
    <Header
    style={{opacity: '0.9'}}
    >
      <div className="logo" />
     <div><img style={logostyle} src={logo} alt="facebook "/> <span style={items}> 
     <a style={itemStyle}>Works </a>
     <a style={itemStyle} href="works">Education and Experience </a>
     <a style={itemStyle}>Contact Me </a>
     </span>
     </div>
     
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