import React from "react";

import Details from "./Details";

import Cards from "./Cards";

import { Router } from "@reach/router";



function Main() {
    
    
    return (

        <main>
            <Router>
                <Cards path = "/"/>
                <Details path = {`/details/:id`}/>
            </Router>
        </main>
    );

}
export default Main;