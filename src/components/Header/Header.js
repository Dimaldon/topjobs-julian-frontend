import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className='header__container'>
        <img className="header__logo" src={logo} alt="logo" />
        <h1>Top Jobs</h1>
      </div>
      <div className='header__nav'>
        <ul>
          <li>
            <Link to="/" className='header__logo-link'>
              as
            </Link>
          </li>
          {/* <li>
            <Link to='/Contacto' className='header__nav-link'>
              Contacto
            </Link>
          </li>
          <li>
            <Link to='/Empleos' className='header__nav-link'>
              Empleos
            </Link>
          </li> */}
        </ul>

      </div>
    </header>
  );
}

export default Header;