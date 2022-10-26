import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

function VideoListComponent() {

    const [sideVideos, setSideVideos] = useState("");

    const dataInfo = async () => {
        await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=movie&key=AIzaSyALE8i5ioHbPaLZqIvKJf-4m_w4wn8i0HI")
            .then((res) => {
                    setSideVideos(res.data)
                    console.log(res.data)
                }
            ).catch((err) => {
                if (err.response.status === 401) {
                    console.log(err);
                }
            });
    }

    useEffect(() => {
        dataInfo();
    }, [])

        // const minutes = Math.floor(video.duration / 60);
        // const seconds = Math.floor(video.duration - minutes * 60);

        return (
            <VideoContainer className="className">
                {
                    sideVideos.items && sideVideos.items.map((i, index) => {
                        return (
                            <div key={index} style={{position:"relative", left:"-250px", display:"flex", justifyContent:"right"}}>
                                <div className="a_style">
                                <img src={i.snippet.thumbnails.default.url} alt=""/>
                                    <p className="videoText">{i.snippet.title}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </VideoContainer>
        );
}

const VideoContainer = styled.div`
    position:absolute;
    width:370px;
    height: 580px;
    overflow-x: auto;
`;


export default VideoListComponent;