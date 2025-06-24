import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/KnalaBeth">KB</Link>
      <Link to="/users/EchoZoriah">EZ</Link>
      <Link to="/users/LouisKimani">LW</Link>
    </nav>
  );
}

export default Nav;
