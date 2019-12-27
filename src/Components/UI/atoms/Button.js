import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
        padding: 1rem;
        background: #5262F2;
        border-radius: 6px;
        color: white;
        border:0;
        box-shadow: 6px 6px 10px #BEBEBE;
        cursor: pointer;
        transition: background-color 1s;

        :hover{
            background-color: #061FFB ;
        }
    `;
function Button(props){
    
    return(
    <StyledButton onClick = {props.onClick}>{props.buttonText}</StyledButton>
    );
}

export default Button;