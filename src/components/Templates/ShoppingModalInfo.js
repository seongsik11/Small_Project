import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from "styled-components";
import "../atoms/Style.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 600,
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

const SmallBox = styled.div`
    position: relative;
      
    margin-right: 25px;
    width: 300px;
    height: 400px;
    background-color:#e9e9e9;
`;

const CloseButton = styled.div`
    width: 40px;
    height: 40px;
    line-height: 40px;
    background-color: black;
    color: white;
    text-align:center;
    border-radius:30px;
`;

function ShoppingModalInfo() {
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
                    <SmallBox>
                        <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                            Style1
                        </Typography>
                        <Typography id="modal-modal-description" align="center" sx={{ mt: 2 }}>
                            111
                        </Typography>
                    </SmallBox>
                    <SmallBox>
                        <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                            Style2
                        </Typography>
                        <Typography id="modal-modal-description" align="center" sx={{ mt: 2 }}>
                            222
                        </Typography>
                    </SmallBox>
                    <SmallBox>
                        <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
                            Style3
                        </Typography>
                        <Typography id="modal-modal-description" align="center" sx={{ mt: 2 }}>
                            333
                        </Typography>
                    </SmallBox>
                </Box>
            </Modal>
        </div>
    );
}

export default ShoppingModalInfo;
