import { Row, Col } from "antd";
import gitImage from '../../assets/github.png';
import googleImage from '../../assets/google.png';
import youtubeImage from '../../assets/youtube.png';
import nodeImage from '../../assets/node.png';
import slackImage from '../../assets/slack.png';
import reactImage from '../../assets/react.png';
import visualImage from '../../assets/visual.png';
const Tools=()=>{

    const imageStyle={

        width: '70px',
        margin: '10px',
        background: 'gray',
        padding: '10px',
        borderRadius: '10%',
    }
   return (
    <> 
    <Row style={{margin: '100px'}}>
        <Col span={13}>
          <div>
            <div style={{fontSize: '18pt', marginTop: '70px'}}>
            These are my all-time favorite Tools and Weapons
            </div>
            <div style={{fontSize: '12pt', marginTop: '10px'}}>

            I always love those software and use in my daily work, 
            because I am very good at these, these are some of the main tools 
            of my development career those are help me to make sure my Clients satisfaction.
            </div>
          </div>
        </Col>
        <Col span={11}>
             <div>
                <img style={imageStyle} src={gitImage}/>
                <img style={imageStyle} src={youtubeImage}/>
                <img style={imageStyle} src={nodeImage}/>
                <img style={imageStyle} src={visualImage}/>
                <img style={imageStyle} src={slackImage}/>
                <img style={imageStyle} src={reactImage}/>
                <img style={imageStyle} src={googleImage}/>
                <img style={imageStyle} src={gitImage}/>
                <img style={imageStyle} src={youtubeImage}/>
                <img style={imageStyle} src={nodeImage}/>
                <img style={imageStyle} src={visualImage}/>
                <img style={imageStyle} src={slackImage}/>
                <img style={imageStyle} src={reactImage}/>
                <img style={imageStyle} src={googleImage}/>
                <img style={imageStyle} src={gitImage}/>
                <img style={imageStyle} src={youtubeImage}/>
                <img style={imageStyle} src={nodeImage}/>
                <img style={imageStyle} src={visualImage}/>
                <img style={imageStyle} src={slackImage}/>
                <img style={imageStyle} src={reactImage}/>
                <img style={imageStyle} src={googleImage}/>
             </div>
        </Col>
    </Row>
    </>
   )
}
export default Tools; 