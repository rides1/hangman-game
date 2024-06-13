import './App.css';
import React from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notify from "./components/Notify";


function App() {
  return (
    <>
    <Header/>
    <div classname= "game-container">
      <Figure/>
      <WrongLetters/>
      <Word/>
      <Popup/>
      <Notify/>
    </div>
    </>
  );
}

export default App;
