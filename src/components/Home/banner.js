import { Row, Col, Image, Space, Divider } from "antd";
import bannerImage from '../../assets/port.jpg';
import Footer from "../footer";
import Experience from "./experience";
import HomeSkills from "./homeSkills";
import Services from "./services";
import Tools from "./tools";
     const Banner=()=>{
            return(
                <>
                <Row style={{margin: '100px'}} gutter={16}>
                
                    <Col className="gutter-row" span={12} style={{ marginTop: '100px',paddingRight: '50px',textAlign: 'right'}}>
                    <div  style={{fontSize: '38pt'}}>
                        Hello There, I am Mintesnot 
                    </div>
                    <div style={{fontSize: '28pt'}}>
                        A web Developer
                    </div>  
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <div>
                      <Image
                         width={400}
                         src={bannerImage}
                            />
                      </div>
                    </Col>
                    
                </Row>
                    <Divider></Divider>
              
                <HomeSkills/>
                <Services/>
                <Tools/>
                <Experience/>
                <Footer/>
                </>
            )
}
export default Banner;