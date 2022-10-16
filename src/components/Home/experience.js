import { Row, Col } from "antd";
import berhanImage from '../../assets/berhan.jpg';
import elnetImage from '../../assets/elnet.jpg';
import yerasImage from '../../assets/yeras.jpeg';

const Experience=()=>{

    return(
        <>
        <Row id="works">
            <div style={{margin:  " auto", fontSize: '30pt'}}>Companies I have worked at</div>
        </Row>
        <Row>
            <Col span={8}>
                <img style={{objectFit: 'contain', width: '100%', height: '200px'}} src={berhanImage} alt="BerhanBank sc logo"/>
            </Col>
            <Col span={8}> <img style={{objectFit: 'contain', width: '100%', height: '200px'}} src={elnetImage} alt="elnet Technologies limited logo"/></Col>
            <Col span={8}> <img style={{objectFit: 'contain', width: '100%', height: '200px'}} src={yerasImage} alt="Yerrass It technology group Logo"/></Col>
        </Row>
        </>
    )
}
export default Experience;