import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
    <>
    <header>
      <p className="U-header-P">Busca tu mejor opcion universidasd para segir con tu estudios superiores </p>
      <nav className="nav-bar">
        <ul className="nav-menu">
        <li><Link to="/">info</Link></li>
          <li className="nav-section">
            <a href="#">Publicas</a>
            <ul className="nav-submenu">
              <li><Link to="/TecNM">Tecnológicos</Link></li>
              <li><Link to="/Suneo">S.Suneo</Link></li>
              <li><Link to="/Normales">Normales</Link></li>
              <li><Link to="/otros">Otros</Link></li>
            </ul>
          </li>
          <li><Link to="/privadas">Privadas</Link></li>
        </ul>
      </nav>
      <Outlet />
    </header>
    </>
  );
}

export default Nav;