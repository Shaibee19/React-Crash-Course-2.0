import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users/KnalaBeth">KB</Link>
      <Link to="/users/EchoZoriah">EZ</Link>
      <Link to="/users/LouisKimani">LW</Link>
    </nav>
  );
}

export default Nav;
