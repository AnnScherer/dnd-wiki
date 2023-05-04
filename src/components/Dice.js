import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";
import d4 from "./svg/d4.svg";
import d6 from "./svg/d6.svg";
import d8 from "./svg/d8.svg";
import d10 from "./svg/d10.svg";
import d12 from "./svg/d12.svg";
import d20 from "./svg/d20.svg";
import d100 from "./svg/d100.svg";
import reload from "./svg/reload.svg";

const Dice = () => {
  const { setShowDice } = useContext(userContext);
  const [dices, setDices] = useState([]);

  // ---------------------------------------------------------

  useEffect(() => {
    const storedDice = async () => {
      const data = localStorage.getItem("Dice");
      if (data === null || !data) {
        setDices((prev) => []);
      } else {
        const parsed = await JSON.parse(data);
        setDices((prev) => parsed);
      }
    };
    storedDice();
  }, []);

  // ---------------------------------------------------------

  const addD4 = () => {
    const newItem = {
      id: dices.length,
      number: Math.floor(Math.random() * 4 + 1),
      dice: "d4",
    };
    const newItems = [...dices, newItem];
    localStorage.setItem("Dice", JSON.stringify(newItems));
    setDices(newItems);
  };

  const addD6 = () => {
    const newItem = {
      id: dices.length,
      number: Math.floor(Math.random() * 6 + 1),
      dice: "d6",
    };
    const newItems = [...dices, newItem];
    localStorage.setItem("Dice", JSON.stringify(newItems));
    setDices(newItems);
  };

  const addD8 = () => {
    const newItem = {
      id: dices.length,
      number: Math.floor(Math.random() * 8 + 1),
      dice: "d8",
    };
    const newItems = [...dices, newItem];
    localStorage.setItem("Dice", JSON.stringify(newItems));
    setDices(newItems);
  };

  const addD10 = () => {
    const newItem = {
      id: dices.length,
      number: Math.floor(Math.random() * 10 + 1),
      dice: "d10",
    };
    const newItems = [...dices, newItem];
    localStorage.setItem("Dice", JSON.stringify(newItems));
    setDices(newItems);
  };

  const addD12 = () => {
    const newItem = {
      id: dices.length,
      number: Math.floor(Math.random() * 12 + 1),
      dice: "d12",
    };
    const newItems = [...dices, newItem];
    localStorage.setItem("Dice", JSON.stringify(newItems));
    setDices(newItems);
  };

  const addD20 = () => {
    const newItem = {
      id: dices.length,
      number: Math.floor(Math.random() * 20 + 1),
      dice: "d20",
    };
    const newItems = [...dices, newItem];
    localStorage.setItem("Dice", JSON.stringify(newItems));
    setDices(newItems);
  };

  const addD100 = () => {
    const newItem = {
      id: dices.length,
      number: Math.floor(Math.random() * 100 + 1),
      dice: "d100",
    };
    const newItems = [...dices, newItem];
    localStorage.setItem("Dice", JSON.stringify(newItems));
    setDices(newItems);
  };

  // ---------------------------------------------------------

  const closePopUp = () => {
    setShowDice(false);
  };

  const sumDices = dices.map((item) => item.number);

  const reloadDices = () => {
    setDices([]);
    localStorage.removeItem("Dice");
  };

  // ---------------------------------------------------------

  return (
    <div className="dice">
      <div onClick={closePopUp} className="closeBTN">
        X
      </div>

      <div className="würfelzahl">
        {dices.map((item) => (
          <p key={item.id}>{item.number}</p>
        ))}
      </div>

      <div className="würfel">
        <img
          onClick={reloadDices}
          className="reload"
          src={reload}
          alt="reload"
        />
        <div className="allDices">
          <p>{sumDices.reduce((a, b) => (a = a + b), 0)}</p>
        </div>
        <div>
          <img onClick={addD4} className="d d4" src={d4} alt="d4" />
          <img onClick={addD6} className="d d6" src={d6} alt="d6" />
          <img onClick={addD8} className="d d8" src={d8} alt="d8" />
        </div>
        <div>
          <img onClick={addD10} className="d d10" src={d10} alt="d10" />
          <img onClick={addD12} className="d d12" src={d12} alt="d12" />
          <img onClick={addD20} className="d d20" src={d20} alt="d20" />
          <img onClick={addD100} className="d d100" src={d100} alt="d100" />
        </div>
      </div>
    </div>
  );
};

export default Dice;
