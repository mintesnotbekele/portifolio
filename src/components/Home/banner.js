import { Row, Col, Image, Space, Divider } from "antd";
import bannerImage from '../../assets/port.png';
import Footer from "../footer";
import Experience from "./experience";
import HomeSkills from "./homeSkills";
import Projects from "./projects";
import Services from "./services";
import Tools from "./tools";
     const Banner=()=>{
            return(
                <>
                <Row style={{margin: '100px'}} gutter={16}>
                
                    <Col className="gutter-row w3-container" span={12} style={{ marginTop: '100px',paddingRight: '50px',textAlign: 'right'}}>
                    <div className="w3-center w3-animate-left " style={{fontSize: '38pt'}}>
                        Hello There, I am Mintesnot 
                    </div>
                    <div style={{fontSize: '28pt'}}>
                        A web Developer
                    </div>
                    <div>
                    software developer with a proven ability to adapt in both collabortive and self starting 
                environment while focusing on delivering quality products within the deadline. 
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
              
                {/* <HomeSkills/> */}
                <Services/>
                <Tools/>
                <Projects/>
                <Experience/>
                <Footer/>
                </>
            )
}
export default Banner;