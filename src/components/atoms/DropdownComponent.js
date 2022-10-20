import React from "react";
import './Dropdown.css';
import Dropdown from "./Dropdown";
import styled from "styled-components";

const Frame = styled.div` 
    width: 344px;
    height:35px;
    line-height: 35px;
    border: 3px solid #2f2a2a;
    
    background-color: #2f2a2a;
    color: white;
    font-weight: bold;
    
    &:hover {
        background-color: #4E4747;
        color: white;
        cursor: pointer;
    }
`;

const DropdownComponent = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    const onClick = (e) => {
        setDropdownVisibility(!dropdownVisibility)
    }

    return (
        <div style={{position:"relative", top:"70px", left:"-13px"}}>
            <Frame onClick={onClick} style={{borderRadius: dropdownVisibility? "0" : "0 0 10px 10px"}}>
                {
                    dropdownVisibility
                        ? 'Close'
                        : '구매'
                }
            </Frame>
            <Dropdown visibility={dropdownVisibility} >
                <ul >
                    <li className="hover_li">담기</li>
                    <li className="hover_li">선물하기</li>
                    <li className="hover_li" style={{borderRadius:"0 0 10px 10px"}}>구매하기</li>
                </ul>
            </Dropdown>
        </div>
    );
}

export default DropdownComponent;