import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from "styled-components";
import "../atoms/Style.css"
import {useState} from "react";
import DropdownComponent from "../atoms/DropdownComponent";


let data = [
    {
        id: 0,
        name: "가을 코디 의상1",
        price: "￦50,000",
        image: "http://openimage.interpark.com/goods_image_big/8/5/4/0/9010788540_l.jpg"
    },
    {
        id: 1,
        name: "가을 코디 의상2",
        price: "￦80,000",
        image: "https://static.coupangcdn.com/image/vendor_inventory/4a2c/6b09bf8d7ff42d630681d9c676df06d4b142d6c61a5c3e325221b952b693.jpg"
    },
    {
        id: 2,
        name: "가을 코디 의상3",
        price: "￦150,000",
        image: "https://shop-phinf.pstatic.net/20210930_14/1633002504108riiV4_JPEG/34138346822004526_1680841261.jpg"
    },
    {
        id: 3,
        name: "겨울 코디 의상1",
        price: "￦300,000",
        image: "data:image/jpeg;base64,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"
    },
    {
        id: 4,
        name: "겨울 코디 의상2",
        price: "￦70,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgOMnPQwekZo-UJQoFfXR4d7MWYX9ie8UIKA&usqp=CAU"
    },
    {
        id: 5,
        name: "겨울 코디 의상3",
        price: "￦230,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3ZmMI0nSJNLMf27LIt95UrOZcSZOxyGZvHq7oFPc6TOzI_YVYor-E6G-jUP10krmNnU&usqp=CAU"
    }
]



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 635,
    bgcolor: 'background.paper',
    border: '5px solid #555',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: 'left',
    overflowX:'auto'
};

const Button1 = styled.div`
    position: sticky;
    top:25px;
    right:0px;
    width: 80px;
    height: 40px;
    line-height: 40px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    text-align:center;

    border-radius:8px;
    font-weight: bold;

    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

const Button = styled.div`
    width:100px;
    height:37px;
    line-height: 35px;
    text-align:center;'
    
`;

const SmallBox = styled.div`
    margin-right: 25px;
    width: 350px;
    height: 400px;
    background-color:#e9e9e9;
`;

// const CloseButton = styled.div`
//     position: fixed;
//     top:25px;
//     right:25px;
//     width: 40px;
//     height: 40px;
//     line-height: 40px;
//     background-color: rgba(0, 0, 0, 0.6);
//     color: white;
//     text-align:center;
//
//     border-radius:30px;
//     font-weight: bold;
//
//     &:hover {
//         background-color: rgba(0, 0, 0, 0.3);
//     }
// `;

function ShoppingModalInfo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [clothes, setClothes] = useState(data);

    return (
        <div>
            <Button className="btn" onClick={handleOpen}>Open</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="className">
                    {data.map((clothes, i) => {
                        return (
                            <div clothes={clothes} key={i} >
                            <SmallBox>
                               <img style={{width:"350px", height:"400px"}} alt={clothes.name} src={clothes.image}/>

                            </SmallBox>
                                    <div className="frame1" id="modal-modal-description" align="center" sx={{mt: 2}}>
                                            {clothes.name}
                                    </div>
                                    <div className="frame2" id="modal-modal-description" align="center" sx={{mt: 2}}>
                                            {clothes.price}
                                    </div>
                                    <div align="center">
                                            <DropdownComponent/>
                                    </div>
                            </div>
                        );
                        })
                    }
                    <Footer>
                        2020Copyright&copy; Develop Reserved.
                    </Footer>
                </Box>
            </Modal>
        </div>
    );
}

const Footer = styled.div`
    position: fixed;
    left:0px;
    display:flex;
    justify-content: center;
    bottom: 0;
    width: 2314px;
    height: 25px;
    line-height: 25px;
    background-color: #2f2a2a;
    font-size:12px;
    color: white;
`;

export default ShoppingModalInfo;
