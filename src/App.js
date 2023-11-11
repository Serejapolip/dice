import Dice from "./components/Dice"
import {useState} from "react";


function App() {
const [diceRandom, setDiceRandom] = useState(6);
  return (

        <Dice
            diceRandom={diceRandom}
            dice__button={() => {
            setDiceRandom(Math.floor(Math.random() * 6)+1)
            }}
        />
  )
}

export default App;
