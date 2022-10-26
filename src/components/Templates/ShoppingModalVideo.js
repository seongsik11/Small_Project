import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styled from "styled-components";
import "../atoms/Style.css"
import VideoListComponent from "../Molecules/VideoListComponent";
import VideoScreenComponent from "../Molecules/VideoScreenComponent";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 635,
    bgcolor: 'background.paper',
    border: '2px solid #555',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: 'center'
};

const Button = styled.div`
    width:100px;
    height:37px;
    line-height: 35px;
    text-align:center;'
    
`;



function ShoppingModalVideo() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button className="btn" onClick={handleOpen}>Open</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{position:"absolute", top:"60px", left:"80px"}}>
                        <VideoScreenComponent/>
                    </div>
                    <div style={{position:"absolute", top:"60px", right:"25em"}}>
                        <VideoListComponent/>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default ShoppingModalVideo;
