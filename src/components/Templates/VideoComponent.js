import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";



function VideoComponent() {
    return (
        <VideoContainer>
            <ReactPlayer
                url={[
                    'https://www.youtube.com/watch?v=oUFJJNQGwhk',
                    'https://www.youtube.com/watch?v=jNgP6d9HraI'
                ]}
            />
        </VideoContainer>
    );
}

const VideoContainer = styled.div`
    position:absolute;
    width:1000px;
    height: 400px;
`;

export default VideoComponent;