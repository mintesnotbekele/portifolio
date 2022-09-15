import { Col, Row } from "antd";
import ContactUs from "./contactus";

const Footer =()=>{

const style={

    margin: 'auto',

}

    return(
        <>
           <Row>
            <Col span={24}>
            <div style={{fontSize: '30pt', textAlign: 'center', marginTop: '40px', marginBottom: '40px'}}>Get In Touch</div>
            </Col>
            <Col span={4}>
                
            </Col>
            <Col style={style} span={4}>
                Address
            </Col>
            <Col style={style} span={4}>
                Phone
            </Col>
            <Col style={style} span={4}>
                Email
            </Col>
            <Col style={style} span={4}>
            LinkedIn
            </Col>
            <Col span={4}>
                
            </Col>
            <ContactUs/>
          </Row>
        </>
    )
}
export default Footer;