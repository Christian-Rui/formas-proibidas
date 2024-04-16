import logoCompleta from '../img/LogoCompleta.svg';
import './header.css'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className='header'>
            <Link to='/'>
                <img src={logoCompleta}/>
            </Link>
        </header>
    );
}