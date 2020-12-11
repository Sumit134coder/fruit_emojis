import React, { useState } from "react";
import "./styles.css";

const fruitdictionary = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper"
};
var fruitemoji = Object.keys(fruitdictionary);
export default function App() {
  var [meaning, setmeaning] = useState("");

  function inputhandler(event) {
    var usrinput = event.target.value;
    meaning = fruitdictionary[usrinput];
    if (meaning === undefined) {
      meaning = "Not in our database";
    }
    setmeaning(meaning);
  }

  function emojiclicked(emoji) {
    meaning = fruitdictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>FRUITS EMOJIS</h1>
      <input onChange={inputhandler}></input>
      <div style={{ fontSize: "2rem", color: "blue" }}>{meaning}</div>
      <h3>Fruit emojis we know</h3>
      {fruitemoji.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclicked(emoji)}
            style={{ fontSize: "1.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
