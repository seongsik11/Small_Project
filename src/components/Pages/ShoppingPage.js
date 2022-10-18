import React from "react";
import ShoppingInfo from "../Templates/ShoppingInfo";
import styled from "styled-components";
import BasicModal from "../atoms/BasicModal";

function ShoppingPage() {
    return (
        <Frame>
            <Header>LIST</Header>
            <Section>
                <ShoppingInfo/>
            </Section>
            <Footer>FIN</Footer>
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
    background-color:black;
    color:white;
    line-height: 70px;
`;

const Section = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #e9e9e9;
`;

const Footer = styled.div`
    position:absolute;
    bottom: 0;
    width: 100%;
    height:50px;
    background-color: black;
    color: white;
    line-height: 50px;
`;
export default ShoppingPage;