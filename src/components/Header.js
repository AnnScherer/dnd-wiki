import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [checkStatus, setChange] = useState(false);
  const [show, setShow] = useState(false);

  const handleSth = (e) => {
    setChange(!checkStatus);
    if (e.target.value === 0) {
      setShow(false);
    } else setShow(!show);
  };

  return (
    <>
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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
