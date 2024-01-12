import '../../style/style.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo.png';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <header>

<nav className="navbar">
        <div className="navbar__logo">
          <img className='Logo' src={Logo} alt="logo" />
        </div>
        <button className="navbar__toggle" id="navbar-toggle" onClick={toggleMenu}>
          <span className="burger">&#9776;</span>
        </button>
        <ul id="navbar-container" className={`navbar__container ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar__item navbar__item--active">
           <NavLink to='/'>Home</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to='/competences'>Skills</NavLink>
          </li>
          <li className="navbar__item">
          <NavLink to='/portfolio'>Portfolio</NavLink>
          </li>
          <li className="navbar__item">
          <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
        </header>
    );
    }