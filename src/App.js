import Dice from "./components/Dice"
import {useState} from "react";


function App() {
const [diceRandom, setDiceRandom] = useState();
  return (
        <Dice
            dice__button={() => {
             setDiceRandom(Math.floor(Math.random() * 6)+1);
             }}
        />
  )
}

export default App;
