import React, {useCallback, useState} from "react";
import styled from "styled-components";
import ShoppingModalInfo from "./ShoppingModalInfo";
import ShoppingModalCon from "./ShoppingModalCon";
import ShoppingModalVideo from "./ShoppingModalVideo";
import {CiYoutube} from "react-icons/ci";
import {GiClothes} from "react-icons/gi";
import {MdOutlineFestival} from "react-icons/md";
import NewsList from "../atoms/NewsList";
import Categories from "../atoms/Categories";
import SwiperBanner from "../atoms/SwiperBanner";
import SearchBar from "../atoms/SearchBar";



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
    const [category, setCategory] = useState('all');
    const onSelect = useCallback((category) => setCategory(category), []);

    return (
        <Frame>
            <ItemFrame>
                <ImgBox style={{top:"60px"}}>
                    <GiClothes size="10em" color="#22b8cf"/>
                </ImgBox>

                <Box>
                     <ShoppingModalInfo/>
                </Box>

                <ImgBox style={{top:"100px"}}>
                    <MdOutlineFestival size="8em" color="#22b8cf"/>
                </ImgBox>

                <Box>
                    <ShoppingModalCon/>
                </Box>

                <ImgBox style={{top:"100px"}}>
                    <CiYoutube size="8em" color="#22b8cf"/>
                </ImgBox>

                <Box>
                    <ShoppingModalVideo/>
                </Box>
            </ItemFrame>

            <SwiperBox>
                <SwiperBanner/>
            </SwiperBox>

            <SearchBox>
                <SearchBar/>
            </SearchBox>
            <SearchListBox>
                    0
            </SearchListBox>
            <NewsBox>
                <div style={{position:"sticky"}}>
                    <Categories category={category} onSelect={onSelect}/>
                </div>
                <NewsListBox>
                    <NewsList category={category} />
                </NewsListBox>
            </NewsBox>
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
    top:70px;
    left: 20px;
    width:325px;
    height:910px;
    border: 2px solid black;
    border-radius: 8px; 
`;

const SwiperBox = styled.div`
    position: absolute;
    top:80px;
    left: 33.5em;
    height:400px;
    
`;

const SearchBox = styled.div`
    position: absolute;
    top:18vw;
    right:40.8vw; 
    width: 1000px;
 
    height: 65px;
    box-shadow: 0 5px 4px -4px rgba(32, 33, 36, 0.5);
`;

const SearchListBox = styled.div`
    position: absolute;
    width:800px;
    height:400px;
    top:560px;
    right:44.8vw;
    text-align: left;
  
`;

const NewsBox = styled.div`
    position:absolute;
    right: 130px;
    width: 890px;
    height: 100%;
    overflow-y:auto;
`;

const NewsListBox = styled.div`
    position:absolute;
    width: 890px;
    height: 100%;
    overflow-y:auto;
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.5);
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