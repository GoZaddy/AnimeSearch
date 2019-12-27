import React,{useState} from 'react';
import Header from "./../UI/Organisms/Header";
import Main from "./../UI/Organisms/Main";
import Footer from "./../UI/Organisms/Footer";
import './App.css';
import ThemeContext from "./../../AnimeContext";


function App() {

  const animeHook = useState("");
  return (
    <ThemeContext.Provider value = {animeHook} >
      <div className="gridWrapper">
        <Header />
        <Main />
        <Footer />
        
      </div>
      </ThemeContext.Provider>
 
  );
}

export default App;
