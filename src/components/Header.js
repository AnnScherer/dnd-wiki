import { NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="nav">
      <NavLink to="/">Zauber</NavLink>
      <NavLink to="/volk">Völker</NavLink>
      <NavLink to="/klasse">Klassen</NavLink>
    </div>
  );
};

export default Header;
