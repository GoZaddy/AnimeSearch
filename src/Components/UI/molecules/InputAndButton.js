import React, { useContext, useState } from "react";
import styled from "styled-components";
import Input from "./../atoms/Input";
import Button from "./../atoms/Button";
import AnimeContext from "./../../../AnimeContext";
const StyledForm = styled.form`
        display: flex;
        justify-content: center;
        padding:0 2rem;
        margin: 0 auto;
        input{
            flex: 3.5;
        }
        button{
            flex: 1;
        }
        @media (min-width: 800px){
            width: 65%;
        }

        @media (max-width: 500px){
            input{
                width: 45%;

            }
            button{
                flex:1;
            }
        }

        
    `;
function Form() {

    const [anime, setAnime] = useContext(AnimeContext);
    const [searchedAnime, setSearchedAnime] = useState("");
    return (
        <StyledForm key="1">
            <Input type="text" placeholder="Search anime" value={searchedAnime} onChange={e => setSearchedAnime(e.currentTarget.value)} />
            <Button buttonText="Search" onClick={(e) => {
                e.preventDefault();
                setAnime(searchedAnime);
            }}></Button>
        </StyledForm>
    );
}

export default Form;
