import React from "react";
import '../atoms/Dropdown.css';
import Dropdown from "../atoms/Dropdown";
import styled from "styled-components";

const Frame = styled.div`
    position:absolute;
    top:500px;
    width: 344px;
    height:35px;
    line-height: 35px;
    border: 3px solid #2f2a2a;
    border-radius: 0 0 10px 10px;
    color: #2f2a2a;
    font-weight: bold;
`;

const DropdownComponent = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

    return (
        <div>
            <Frame onClick={ e => setDropdownVisibility(!dropdownVisibility)}>
                {
                    dropdownVisibility
                        ? 'Close'
                        : 'Open'
                }
            </Frame>
            <Dropdown visibility={dropdownVisibility} >
                <ul className="hover_li">
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                </ul>
            </Dropdown>
        </div>
    );
}

export default DropdownComponent;