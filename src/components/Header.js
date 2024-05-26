import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import userContext from "../context/userContext";
import Dice from "./Dice";

const Header = () => {
  const [checkStatus, setChange] = useState(false);
  const [show, setShow] = useState(false);
  const {showDice, setShowDice} = useContext(userContext);

  const handleSth = (e) => {
    setChange(!checkStatus);
    if (e.target.value === 0) {
      setShow(false);
    } else setShow(!show);
  };

  const showPopUp = () => {
    setShowDice(true);
  };

  return (
    <div className="header-container">
      <nav role="navigation">
        <div id="menuToggle">
          <input checked={show} onClick={handleSth} readOnly type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li onClick={handleSth}>
              <NavLink to="/">Zauber</NavLink>
            </li>
            <li onClick={handleSth}>
              <NavLink to="/volk">Völker</NavLink>
            </li>
            <li onClick={handleSth}>
              <NavLink to="/klasse">Klassen</NavLink>
            </li>
            <li onClick={handleSth}>
              <NavLink to="/hintergrund">Hintergrund</NavLink>
            </li>
            <li onClick={handleSth}>
              <NavLink to="/gesinnung-sprachen">Gesinnung & Sprachen</NavLink>
            </li>
            <li onClick={handleSth}>
              <NavLink to="/waffen">Waffen</NavLink>
            </li>
            <li onClick={handleSth}>
              <NavLink to="/rüstung">Rüstung</NavLink>
            </li>
            <li onClick={handleSth}>
              <NavLink to="/ausrüstung">Ausrüstung</NavLink>
            </li>
            <li onClick={handleSth}>
              <NavLink to="/werkzeuge">Werkzeuge</NavLink>
            </li>
            <li onClick={handleSth}>
              <NavLink to="/talente">Talente</NavLink>
            </li>
          </ul>
        </div>
        <img
          className="logo"
          onClick={showPopUp}
          src={require("./w20.webp")}
          alt="w20"
        />
      </nav>

      {showDice && <Dice />}
    </div>
  );
};

export default Header;
