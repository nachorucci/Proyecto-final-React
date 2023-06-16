import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { CartProvider } from '../../context/CartContext'

const NavBar = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
  };
  const imgLogo = "../assets/img/wineLogo-removebg-preview-removebg-preview.png"
  return (
      <header className="navbar navbar-expand-lg p-0 justify-content-end fixed-top">
        <div className="container-fluid p-0 m-0">
          <Link to={"/"} style={linkStyle} className='d-flex align-items-center'>
            <img className='imgLogo m-0 p-0' src={imgLogo} alt="argLogo"/>
          </Link>
          <button className="navbar-toggler m-3 bg-secondary"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <nav className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item m-3">
                <Link to={"/"} style={linkStyle}>Home</Link>
              </li>
              <li className="nav-item dropdown" data-bs-theme="dark">
                <a className="nav-link dropdown-toggle text-center" style={linkStyle} href="#"  data-bs-toggle="dropdown" aria-expanded="false">
                 Wines
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item m-3"><NavLink style={linkStyle} to={`/categoria/1`}>Malbec</NavLink></li>
                  <li className="nav-item m-3"><NavLink style={linkStyle} to={`/categoria/2`}>Cabernet Sauvignon</NavLink></li>
                  <li className="nav-item m-3"><NavLink style={linkStyle} to={`/categoria/3`}>Merlot</NavLink></li>
                </ul>
              </li>
              <li className="nav-item m-3">
                <NavLink to={`/formulario`} style={linkStyle}>Tastings & Events</NavLink>
              </li>
                <CartWidget />
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default NavBar
