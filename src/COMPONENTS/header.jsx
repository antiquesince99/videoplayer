import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NavLink activeclassName="active" className="nav-link" to="/Login">
              Login
            </NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/Register">
              Register
            </NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/AddVideo">
              AddVideo
            </NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/ViewVideo">
                ViewVideo
            </NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/ViewList">
                ViewVideo
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
