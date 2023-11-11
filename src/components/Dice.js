import "./Dice.css";
export default function Dice({diceRandom, dice__button}) {

return (
<div className="Dice__app">
    <div className="Dice__random">
        <img
            alt="Dice"
            className="Dice"
            src={"/pics/dice"+diceRandom+".png"}
        />
    </div>
    <div className="Dice__button">
        <button onClick={dice__button}>Бросить кубик!</button>
    </div>
</div>

)

}