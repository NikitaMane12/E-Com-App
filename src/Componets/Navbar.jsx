import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">Shopi</div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/" className="link">
            All
          </a>
        </li>
        <li className="nav-item">
          <a href="/Cloths" className="link">
            cloths
          </a>
        </li>
        <li className="nav-item">
          <a href="/Electronics" className="link">
            Electronics
          </a>
        </li>
        <li className="nav-item">
          <a href="category" className="link">
            Furnitures
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="link">
            Toys
          </a>
        </li>
      </ul>
      <ul className="nav-links" style={{ marginLeft: "50%" }}>
        <li className="nav-item">
          <a href="#home" className="link">
            userintheapp@test.com
          </a>
        </li>
        <li className="nav-item">
          <a href="" className="link">
            My Order
          </a>
        </li>
        <li className="nav-item">
          <a href="/Login" className="link">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a href="/Login" className="link">
            <img
              height={30}
              src="https://tse1.mm.bing.net/th?id=OIP.Xga9nDkTCoJyrZb6KQrW3wHaHa&pid=Api&P=0&h=180"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
