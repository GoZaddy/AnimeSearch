import React, { useContext, useEffect, useState, Component } from "react";
import Text from "./../atoms/Text";
import AnimeContext from "./../../../AnimeContext";
import styled from "styled-components";
import Card from "./../molecules/Card";
import Loader from "react-loader-spinner";
import { render } from "react-dom";


const CardGrid = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        @media (max-width: 768px){
            grid-template-columns: 1fr;
        }
    `;
const loadingStyle = {
    textAlign: "center",
    marginTop: "5rem"
}
class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            urli: "",
            arrayOfCards: [],
            isLoading: false
        }

        this.setCards = this.setCards.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    static contextType = AnimeContext;
    
    /*const [animeName] = useContext(AnimeContext);
    const [urli, setUrl] = useState("");

    const [arrayOfCards, setCardsDisplayed] = useState();
    const [isLoading, setIsLoading] = useState(false);*/

    async componentDidMount(){
        this.setState({
            urli: `https://api.jikan.moe/v3/search/anime?q=${this.context[0]}&limit=12`,
            arrayOfCards: await this.fetchData()
           
        });          
    }
    async fetchData() {
        this.setState({
            urli: `https://api.jikan.moe/v3/search/anime?q=${this.context[0]}&limit=12`
        });
        let response = await fetch(this.state.urli);
        let data = await response.json();
        let results = await data.results;
        return results;
    }

    setCards(results) {
        /*this.setState({
            arrayOfCards: []
        })*/
        
        console.log("results from setCards: " + results);
        results.length > 0 ? this.setState({setIsLoading: false}) : this.setState({setIsLoading: true})
        this.setState({
            arrayOfCards: results.map(
                animeObject => <Card
                    key={animeObject.mal_id}
                    cardTitle={animeObject.title}
                    img={animeObject.image_url}
                    synopsis={animeObject.synopsis}
                    episodes={animeObject.episodes}
                    animeUrl={animeObject.url}
                    score={animeObject.score}
                    type={animeObject.type}
                    rated={animeObject.rated}
                />)
        })
        

    }

    async componentDidUpdate(prevProps, prevState){
        
        if(prevState.urli !== this.state.urli){
            this.setCards(await this.fetchData());
            console.log("UPDATED!");
        }
        
        
        
    }
    






    render() {
        
        console.log("some state changed");
        console.log(this.context[0]);
        console.log(this.state);
        return (

            <div>
                <Text type="resultText" value={`Search results for ${this.context[0]}`} />
                {this.state.isLoading && this.context !== ""
                    &&
                    <Loader
                        style={loadingStyle}
                        type="ThreeDots"
                        color="#5262F2"
                        height={100}
                        width={100}
                        timeout={0} />
                }
                <CardGrid path="/" >

                    {
                        this.state.arrayOfCards
                    }


                </CardGrid>

            </div>
        );
    }


}
export default Cards;