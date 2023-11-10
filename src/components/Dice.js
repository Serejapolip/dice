import "./Dice.css";
export default function Dice({dices, dice__button}) {
const dice_random = Math.floor(Math.random() * 6)+1;

return (
<div className="Dice__app">
    <div className="Dice__random">
        <img
            className="Dice"
            src={"/pics/dice"+dice_random+".png"}
        />
    </div>
    <div className="Dice__button">
        <button onClick={dice__button}>Бросить кубик!</button>
    </div>
</div>

)
}