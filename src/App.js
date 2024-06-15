import './App.css';
import React, { useState, useEffect} from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";


const words = ['application', 'debug', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

const correctLetters = [];
const wrongLetters = [];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setwrongLetters] = useState([]);

  useEffect(() => {
    const handleKeydown = event => {
      const {key, keyCode} = event;
        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
    
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
    
            } else {
              //showNotification();
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setwrongLetters(wrongLetters => [...wrongLetters, letter]);
    
            } else {
              //showNotification();
            }
          }
        }
      }
      window.addEventListener('keydown', handleKeydown);

      return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);


  return (
    <>
    <Header/>
    <div classname= "game-container">
      <Figure/>
      <WrongLetters wrongLetters={wrongLetters}/>
      <Word selectedWord= {selectedWord} correctLetters={correctLetters}/>
    </div>
    </>
  );
}

export default App;
