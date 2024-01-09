import '../../style/style.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo.png';

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