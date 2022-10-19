import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ShoppingModalInfo from "./ShoppingModalInfo";
import ShoppingModalCon from "./ShoppingModalCon";
import ShoppingModalVideo from "./ShoppingModalVideo";
import {CiYoutube} from "react-icons/ci";
import {GiClothes} from "react-icons/gi";
import {MdOutlineFestival} from "react-icons/md";



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
            <ItemFrame>
                <ImgBox style={{top:"60px"}}>
                    <GiClothes size="10em"/>
                </ImgBox>
                <Box>
                     <ShoppingModalInfo/>
                </Box>

                <ImgBox style={{top:"100px"}}><MdOutlineFestival size="8em"/></ImgBox>
                <Box>
                    <ShoppingModalCon/>
                </Box>

                <ImgBox style={{top:"100px"}}><CiYoutube size="8em"/></ImgBox>
                <Box>
                    <ShoppingModalVideo/>
                </Box>
            </ItemFrame>
        </Frame>
    )
}

const Frame = styled.div`
    margin:0 auto;
    width: 90%;
    height: 100%;
    background-color: white;
    display:flex;
    justify-content: left;
    
`;

const ItemFrame = styled.div`
    position: relative;
    top:20px;
    left: 20px;
    width:325px;
    height:910px;
    border: 2px solid black;
    border-radius: 8px; 
`;

const ImgBox = styled.div`
    position:relative;
    width:325px;
    height:0px;
`;

const Box = styled.div`
    position: relative;
    left:12px;
    margin-top: 250px;
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