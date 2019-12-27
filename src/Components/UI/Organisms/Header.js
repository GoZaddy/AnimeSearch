import React from "react";
import styled from "styled-components";
import Form from "./../molecules/InputAndButton";
const StyledHeader = styled.header`
        background-color: #C2C2C2;
        padding: 1.5rem 0;
    `;
    
function Header(){
    
    return(
        <StyledHeader>
            <Form />
        </StyledHeader>
    );
}

export default Header;