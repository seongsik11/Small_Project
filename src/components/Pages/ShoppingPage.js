import React from "react";
import ShoppingInfo from "../Templates/ShoppingInfo";
import styled from "styled-components";

function ShoppingPage() {

    return (
        <Frame>
            <Header style={{fontSize:"25px"}}>
                <span style={{color:"lightgray"}}>My Project</span>
            </Header>
            <Section>
                <ShoppingInfo/>
            </Section>

        </Frame>
    );
}

const Frame = styled.div`
    width: 100%;
    height: 100%;
`;

const Header = styled.div`
    width: 100%;
    height: 70px;
    background-color:#3D3A3A;
    color:white;
    line-height: 70px;
`;

const Section = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #e9e9e9;
`;

export default ShoppingPage;