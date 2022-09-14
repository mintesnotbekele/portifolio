import { Row, Col, Divider } from "antd";
import codeImage from '../../assets/coding.png';
import cameraImage from '../../assets/photographer.png';
import databaseImage from '../../assets/database.png';
const Services=()=>{
   const style = {
      background: '#0092ff',
      padding: '8px 0',
      textAlign: 'center'
    };
 
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
      <Row >
      <Col span={1}>
       </Col>
       <Col span={7}>
       <div style={compstyle}>
         <div >
            <img style={{objectFit: 'contain', width: '30%'}} src={codeImage}/>
         </div>
          <div style={skillHeader}>Web Development</div>
          <div>software developer with a proven ability to adpt in both collabortive and self starting 
                environment while focusing on delivering quality products within the deadline</div>
          </div>
       </Col> 
       <Col span={7}>
       <div style={compstyle}>
         <div >
            <img style={{objectFit: 'contain', width: '30%'}} src={cameraImage}/>
         </div>
          <div style={skillHeader}>Photography</div>
          <div>software developer with a proven ability to adpt in both collabortive and self starting 
                environment while focusing on delivering quality products within the deadline</div>
          </div>
       </Col> 
       <Col span={7}>
       <div style={compstyle}>
         <div >
            <img style={{objectFit: 'contain', width: '30%'}} src={databaseImage}/>
         </div>
          <div style={skillHeader}>Database and Server Management</div>
          <div>software developer with a proven ability to adpt in both collabortive and self starting 
                environment while focusing on delivering quality products within the deadline</div>
          </div>
       </Col>
       <Col className="gutter-row" span={1}>
       </Col> 
       <Divider></Divider>
       <Col className="gutter-row" span={1}>
       </Col>
       <Col className="gutter-row" span={7} style={style}>
          <div>Web Development</div>
       </Col> 
       <Col className="gutter-row" span={7} style={style}   >
       <div>Web Development</div>
       </Col> 
       <Col className="gutter-row" span={7} style={style}>
       <div>Web Development</div>
       </Col>
       <Col className="gutter-row" span={1}>
       </Col> 
       </Row>
      
    </>
   )
}
export default Services