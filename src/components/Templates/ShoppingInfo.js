import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";
import ShoppingModalInfo from "./ShoppingModalInfo";
import BasicModal from "../atoms/BasicModal";
import ShoppingModalCon from "./ShoppingModalCon";
import ShoppingModalVideo from "./ShoppingModalVideo";


function ShoppingInfo(props) {
    // const [data, setData] = useState("");
    //
    // const dataInfo = async () => {
    //     await axios.get('https://api.odcloud.kr/api/15095879/v1/uddi:4ae82396-f11b-43d4-8b89-ef5822e761ae?page=1&perPage=10&serviceKey=data_key',{
    //         withCredentials:true})
    //         .then((res) => {
    //             setData(res.data)
    //             console.log(res.data)
    //         })
    // }
    //
    // useEffect(() => {
    //     dataInfo();
    // }, [])


    return (
        <Frame>
            <Box>
                <ShoppingModalInfo/>
            </Box>
            <Box>
                <ShoppingModalCon/>
            </Box>
            <Box>
                <ShoppingModalVideo/>
            </Box>
            <Box>
                <ShoppingModalInfo/>
            </Box>
            <Box>
                <ShoppingModalInfo/>
            </Box>
            <Box>
                <ShoppingModalInfo/>
            </Box>
        </Frame>
    )
}

const Frame = styled.div`
    margin:0 auto;
    width: 90%;
    height: 100%;
    background-color: white;
    display:flex;
    justify-content: center;
`;

const Box = styled.div`
    position: relative;
    margin-top: 300px;
    margin-right: 100px;
    margin-left: 100px;
    width: 100px;
    height: 37px;
    line-height: 31px;
    background-color:#f2f2f2;
    border-radius:10px;
    text-align:center;
    cursor:pointer;
`;
export default ShoppingInfo;