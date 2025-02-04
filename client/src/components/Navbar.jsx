import './Navbar.css'; // Make sure to create this CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item home">Home</li>
        <li className="navbar-item">Features</li>
        <li className="navbar-item">Mission</li>
        <li className="navbar-item">Contact</li>
        <li className="buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;