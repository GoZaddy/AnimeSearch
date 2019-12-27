import React from "react";
import styled from "styled-components";

function Text(props) {
    const Text = styled.p`
        text-align: center
    `;

    const CardTitle = styled(Text)`
    
        color: #333;
        text-decoration: none;

        
    `;
    const ResultText = styled(Text)`
        font-size: 150%;
        text-align: center;
        font-weight: bold;

        @media (max-width: 768px){
            padding: 0 1rem;
        }
    `;

    const AnimeLink = styled.a`
            display: block;
            color: blue;
            text-decoration: none;
            text-align: center;
    `;

    if (props.type === "CardTitle") {
        return (
            <CardTitle>{props.value}</CardTitle>
        );
    }
    else if (props.type === "resultText") {
        return (
            <ResultText>{props.value}</ResultText>
        );
    }
    else if (props.type === "AnimeLink") {
        return (
            <AnimeLink href={props.link}>{props.value}</AnimeLink>
        );
    }

    else {
        return (
            <Text><strong>{props.heading}</strong> {props.value}</Text>
        );
    }



}

export default Text;