import '../../style/style.scss';
import Logo from '../../Icons/Logo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
        <nav className='nav'>
            <div className="nav__logo">
            <NavLink to="/" exact>
            <img className='Logo' src={Logo} alt="logo" />
            </NavLink>
            </div>
            <div className="nav__links">
        <NavLink to="/" exact>
        Home
        </NavLink>
        <NavLink to="/portfolio">
        Portfolio
        </NavLink>
        <NavLink to="/competences">
        Skills
        </NavLink>
        <NavLink to="/contact">
        Contact
        </NavLink>
        </div>
        </nav>
        </header>
    );
    }