import { Row, Col, Divider } from "antd";
import taxiyeImage from "../../assets/taxiye.png";
import bodaImage from "../../assets/boda.png";
import cattleImage from "../../assets/cattle.jpeg"
import eltntImage from "../../assets/elnet.jpg"
const Projects =()=>{
    const contStyle = {
        background: 'white',
        borderRadius: '9%',
        margin: '30px',
        color: 'black'
    }
return (
   <> <Row><div style={{margin: 'auto' , fontSize: '28pt'}}>projects I have participated on</div></Row>
    <Row>
        <Col style={contStyle} span={10}><div style={{margin: '0px 100px'}}>
            Taxiye
                  <img src={taxiyeImage}/>  
         </div></Col>
         <Col style={contStyle} span={10}><div style={{margin: '0px 100px'}}>
         Boda Boda 
            <img src={bodaImage}/>
         </div></Col>
         <Col style={contStyle} span={10}><div style={{margin: '0px 100px'}}>
         ElTNT
        <img src={eltntImage} style={{width: '100%'}}/>  
         </div></Col>
         <Col style={contStyle} span={10}><div style={{margin: '0px 100px'}}>
         Yerras-App
         <img src={cattleImage}/>
         </div></Col>
        {/* <Col  style={contStyle} span={10}> <div style={{margin: '0px 100px'}}> 
            Boda Boda 
            <img src={bodaImage}/>
            </div></Col>
        <Col  style={contStyle} span={8}> <div style={{margin: '0px 100px'}}>ElTNT
        <img src={taxiyeImage}/>  
        </div> </Col>
        <Col  style={contStyle} span={8}> <div style={{margin: '0px 100px'}}>Yerras-App
         <img src={cattleImage}/>
        </div></Col>
        <Col  style={contStyle} span={8}> <div style={{margin: '0px 100px'}}>Berhan Lottery </div></Col> */}
    </Row>
    </>
)
}
export default Projects;