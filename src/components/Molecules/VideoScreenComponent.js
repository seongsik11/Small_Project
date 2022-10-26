import React, {useEffect, useState} from "react";
import YouTube from "react-youtube";
import axios from "axios";
import styled from "styled-components";

function VideoScreenComponent(props) {

    const [Videos, setVideos] = useState("");

    const dataInfo = async () => {
        await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=movie&key=AIzaSyALE8i5ioHbPaLZqIvKJf-4m_w4wn8i0HI")
            .then((res) => {
                    setVideos(res.data)
                    console.log(res.data)
                }
            ).catch((err) => {
                if (err.response.status === 401) {
                    console.log(err);
                }
            });
    }

    useEffect(() => {
        dataInfo()
    }, [])

    const i = 1;

    return (
        <>
            <YouTube
                opts={{
                    width: "800px",
                    height: "450px",
                    playerVars: {
                        autoplay: 0,
                        modestBranding: 1,
                    },
                }}
                videoId={Videos.items}
            />
            <VideoTitle>
             sdf
            </VideoTitle>
        </>
    );
}

const VideoTitle = styled.div`
    position:absolute;
    font-size: 18px;
    text-align:left;
`;

export default VideoScreenComponent;