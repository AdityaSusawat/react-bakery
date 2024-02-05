export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-icon">ICON</div>
      <ul className="navbar-items">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
