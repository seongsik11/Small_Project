import VideoComponent from "../atoms/VideoComponent";
import { Row, Col } from 'antd';

function VideoDetailPage(props) {
    return (
        <Row gutter{[16, 16]}>
            <Col lg={18} xs={24}>

            </Col>
            <Col lg={6} xs={24}>
                <VideoComponent/>
            </Col>
        </Row>
    );
}

export default VideoDetailPage;