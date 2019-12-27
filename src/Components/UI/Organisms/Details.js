import React from "react";

import Text from "./../atoms/Text";
import styled from "styled-components";
const StyledDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    padding:  3rem 0;
    flex-direction: column;

    img{

    }
    p{
        margin-bottom: 0;
    }

    @media (max-width: 470px){
        p{
            align-self: flex-start;
        }
        width: 70%;
    }


`;

const titleStyle = {
    fontSize: "110%",
    textAlign: "center",
    fontWeight: "bold"
}
const Details = (props) => {
    console.log(props);
    return (
        <StyledDetails>
            
                <img src={props.location.state.img} alt="" />
                <h2 style = {titleStyle}>{props.location.state.title}</h2>
                <Text heading = "Type:" value={`${props.location.state.type}`}></Text>
                <Text className = "non-title" heading = "Episodes:" value={`${props.location.state.episodes}`}></Text>
                <Text className = "non-title" heading = "Rated:" value={`${props.location.state.rated}`}></Text>
                <Text className = "non-title" heading = "Score:" value={`${props.location.state.score}`}></Text>

                <p><strong>Synopsis:</strong><br/>{`${props.location.state.synopsis}`} <a href={props.location.state.link}>Read more.</a></p>
            

        </StyledDetails>
    );
}


export default Details;