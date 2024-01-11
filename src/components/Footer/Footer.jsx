import '../../style/style.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../Logo/Logo.png';

export default function Footer() {
    return (
        <div className="footer_container">
        <footer className='footer'>
           
        <div className="footer__logo">
            <NavLink to="/"><img className="Logo" src={Logo} alt="logo" /></NavLink>
        </div>
        <div className="reserved">
            <p>©BdsvhB 2024 - Tous droits réservés</p>
        </div>
        </footer>
        </div>
    );
    }