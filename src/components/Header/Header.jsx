import '../../style/style.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo.png';
import { useState } from 'react';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

//toggleMenu permet de modifier la valeur de l'état isMenuOpen
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <header>

<nav className="navbar">

        <div className="navbar__logo">
          <NavLink to='/'><img className='Logo' src={Logo} alt="logo" /></NavLink>
        </div>
        <button className="navbar__toggle" id="navbar-toggle" onClick={toggleMenu}>
          <span className="burger">&#9776;</span>
        </button>
        {/* //isMenuOpen ? 'active' : '' permet de savoir si le menu est ouvert ou fermé */}
        <ul id="navbar-container" className={`navbar__container ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar__item navbar__item--active">
           <NavLink to='/'><i class="fa-solid fa-house-user"></i> Home</NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to='/competences'><i class="fa-solid fa-gears"></i> Skills</NavLink>
          </li>
          <li className="navbar__item">
          <NavLink to='/portfolio'><i class="fa-solid fa-file-code"></i> Portfolio</NavLink>
          </li>
          <li className="navbar__item">
          <NavLink to='/contact'><i class="fa-solid fa-pen-to-square"></i> Contact</NavLink>
          </li>
        </ul>
      </nav>
        </header>
    );
    }