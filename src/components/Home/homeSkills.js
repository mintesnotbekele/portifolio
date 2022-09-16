import { Row,Button, Progress } from "antd";
import Col from "antd/es/grid/col";
const HomeSkills=()=>{
     return (
        <>
        <Col span={24} style={{textAlign: 'center', fontSize: '38pt'}}>
            My Skills
        </Col>
        <Col span={24} style={{textAlign: 'center', fontSize: '17pt'}}>
        Hello I’m <b>Mintesnot,</b> a Software engineer in Addis Ababa, Ethiopia. I love Technology & likes to develop new Tech things, And also enjoy sports!
        </Col>
        <Row >
            <Col style={{padding: '100px'}} span={12}>
            <div style={{fontSize: '14pt'}}>Hello! I am Mintesnot Bekele, Web developer, Digital marketer and a YouTuber. 
            I live in Hyderabad, India. I am Frontend developer and I have build some projects on wordpress Elementor.
            I also know basic about SEO. I have Youtube Channel where I upload my project's video and many more things.
            Have a Look at My Youtube Channel, It will Students/developer to learn thing in easy ways and help you to make projects. 
            Or you can connect me on Facebook, Linkdin or Instagram. I am always excited to talk about Tech.</div>
            <Button ghost style={{color: 'black'}}>
                Contact Me
            </Button>
            <Button ghost style={{color: 'black'}}>
                Download  My CV
            </Button>
            </Col>
            <Col span={12}>
            <div>html</div>
            <div>
            <Progress percent={100} />
            </div>
            <div>Javascript</div>
            <div>
            <Progress percent={100} />
            </div>
            <div>React</div>
            <div>
            <Progress percent={100} />
            </div>
            <div>Redux</div>
            <div>
            <Progress percent={100} />
            </div>
            <div>typescript</div>
            <div>
            <Progress percent={100} />
            </div>
            <div>Next.js</div>
            <div>
            <Progress percent={100} />
            </div>
            <div>GraphQl</div>
            <div>
            <Progress percent={100} />
            </div>
            <div>Laravel</div>
            <div>
            <Progress percent={100} />
            </div>
            </Col>
        </Row>
        </>
     )
}
export default HomeSkills; 