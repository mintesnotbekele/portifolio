import { Row, Col, Divider } from "antd";
import codeImage from '../../assets/coding.png';
import cameraImage from '../../assets/photographer.png';
import databaseImage from '../../assets/database.png';
import javascriptImage from "../../assets/javascript.png";
import wordpressImage from '../../assets/wordpress.png';
import reactImage from '../../assets/react.png';
import phpImage from '../../assets/php.png';
import vueImage from "../../assets/vue.png";
import nextImage from "../../assets/next.png"
const Services=()=>{
   const style = {
      background: '#0092ff',
      padding: '8px 0',
      textAlign: 'center'
    };
    const imageStyle={

      width: '70px',
      margin: '10px',
      background: 'gray',
      padding: '10px',
      borderRadius: '10%',
      height: '70px'
  }
    const compstyle={

      margin: '10px',
      borderStyle: 'solid',
      borderWidth: '1px',
      padding: '10px'
    }

    const skillHeader={
      fontSize: '20pt',
      fortStyle: 'bold'
    }
   return(
    <>
      <Row>
         <Col span={24}><div style={{marginLeft: '380px', fontSize: '20pt'}}>Programming languages i use</div></Col>
      <Col span={6}></Col>
      <Col span={12}>
             <div style={{margin: 'auto'}}>
             <img style={imageStyle} src={reactImage}/>
             <img style={imageStyle} src={phpImage}/>
             <img style={imageStyle} src={javascriptImage}/>
             <img style={imageStyle} src={vueImage}/>
             <img style={imageStyle} src={nextImage}/>
             <img style={imageStyle} src={wordpressImage}/>  
             </div>
        </Col>
      </Row>
     
    </>
   )
}
export default Services