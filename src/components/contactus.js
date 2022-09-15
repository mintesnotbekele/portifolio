import { Col, Form, Input,Row } from "antd";
import skype from '../assets/skype.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import TextArea from "antd/lib/input/TextArea";
const ContactUs=()=>{
const imageStyle = {
    width: '40px',
    margin: '20px'
}
    return (
        <>
            <Col span={4}>
            </Col>
            <Col style={{marginTop: '50px'}} span={8}>
               <div style={{fontSize: '28pt'}}> Let's Connect</div>
                <div>
                  <div><img style={imageStyle} src={facebook} alt="facebook "/> <span>facebook</span></div>
                    <div><img style={imageStyle} src={twitter} alt="twitter "/> <span>twitter</span> </div>
                    <div> <img style={imageStyle} src={linkedin} alt="Linkedin "/> <span>linkedin</span> </div>
                   <div> <img style={imageStyle} src={skype} alt="skype "/> <span>skype</span>
                  </div>  
                </div>
            </Col>
            <Col style={{marginTop: '50px'}} span={12}>
            <div style={{fontSize: '28pt'}}> Send Me a Message</div>
            <Form
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                
                >
            <Row>
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input placeholder="Email" />
            </Form.Item>

            </Row>
            <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: 'Please input the Subject' }]}
            >
                <Input placeholder="subject" />
            </Form.Item>
            <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please input your Message' }]}
            >
                <TextArea/>
                
            </Form.Item>
      </Form>
            </Col>
        
        </>
    )
}
export default ContactUs;