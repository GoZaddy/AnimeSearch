import React from "react";
import styled from "styled-components";


function Thumbnail(props){

    const Image = styled.img`
        height: auto;
        display: block;
        width: 100%;
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;

    `;
    return(
        <div>
            <Image src={props.imageSource} alt=""/>
        </div>
    );
}

export default Thumbnail;