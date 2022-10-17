import { Row, Col, Divider } from "antd";
import taxiyeImage from "../../assets/taxiye.png";
import bodaImage from "../../assets/boda.png";
import cattleImage from "../../assets/cattle.jpeg"
const Projects =()=>{
return (
   <> <Row><div style={{margin: 'auto' , fontSize: '28pt'}}>projects I have participated on</div></Row>
    <Row>
        <Col span={8}><div style={{margin: '0px 100px'}}>
            Taxiye
                  <img src={taxiyeImage}/>  
            </div></Col>
        <Col span={8}> <div style={{margin: '0px 100px'}}>
            Boda Boda 
            <img src={bodaImage}/>
            </div></Col>
        <Col span={8}> <div style={{margin: '0px 100px'}}>ElTNT</div> </Col>
        <Col span={8}> <div style={{margin: '0px 100px'}}>Yerras-App
         <img src={cattleImage}/>
        </div></Col>
        <Col span={8}> <div style={{margin: '0px 100px'}}>Berhan Lottery </div></Col>
    </Row>
    </>
)
}
export default Projects;