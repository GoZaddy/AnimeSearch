import React from "react";
import styled from "styled-components";
function Footer (){

    const Footer = styled.footer`
        background-color: #333;
        
        p{
            color: white;
            text-align: center;

            a{
                color: white;
            }
        }

    `;
    return(
        <Footer>
            <p>Built by <a href="https://twitter.com/developerRuq">Faruq</a></p>
        </Footer>
    );
}

export default Footer;