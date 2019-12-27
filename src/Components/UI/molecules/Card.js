import styled from "styled-components";
import {  Link } from "@reach/router";
import React, { useContext } from "react";
import AnimeContext from "./../../../AnimeContext";
import Text from "./../atoms/Text";
import Thumbnail from "./../atoms/Thumbnail";
const StyledCard = styled.div`
        box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.17);
        border-radius: 16px;
        width: 60%;
        margin: 1rem auto;
        padding-bottom: 0.5rem;
        transition: box-shadow 1s, transform 0.5s;

        :hover{
            box-shadow: 15px 15px 25px rgba(0, 0, 0, 0.3);
            transform: translatey(-25px);
        }

        a{
            text-decoration: none;
        }
        
        
    `;


function Card(props) {
    const [anime] = useContext(AnimeContext);



    return (
        <StyledCard>
            <Link to={`/details/${anime}`} state = {{
                title: props.cardTitle,
                img: props.img,
                synopsis:props.synopsis,
                episodes: props.episodes,
                link: props.animeUrl,
                type: props.type,
                rated: props.rated,
                score: props.score

            }} >
                <Thumbnail imageSource={props.img} />
                <Text type="CardTitle" value={props.cardTitle} />
            </Link>
        </StyledCard>
    );


}

export default Card;