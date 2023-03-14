import './styles.scss';
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const navRef = useRef();
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header className="header">
            <h1>Pourquoi m'engager?</h1>
            <nav ref={navRef} className="header_nav">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/a-propos">A propos de moi</NavLink>
                <NavLink to="/me-contacter">Me contacter</NavLink>
                <button className="header_nav_btn header_nav_close_btn" onClick={showNavBar}> 
                    <FaTimes />
                </button>
            </nav>
            <button className="header_nav_btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    );
}
