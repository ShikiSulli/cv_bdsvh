import '../../style/style.scss';
import Logo from '../../Icons/Logo.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='footer'>
           
        <div className="footer__logo">
            <NavLink to="/"><img className="Logo" src={Logo} alt="logo" /></NavLink>
        </div>
        <div className="reserved">
            <p>©BdsvhB 2024 - Tous droits réservés</p>
        </div>
        </footer>
    );
    }