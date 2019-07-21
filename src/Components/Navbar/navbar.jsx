import React from 'react';
import '../../Styles/navbar.scss';

const Navbar = () => {

    return (
            <nav className='animated rubberBand'>
                <ul>
                    <li><a href="#about" className="menu active">O mnie</a></li>
                    <li><a href="#skills" className="menu">Umiejętności</a></li>
                    <li><a href="#projects" className="menu">Projekty</a></li>
                    <li><a href="#contact" className="menu">Kontakt</a></li>
                </ul>
            </nav>
    );
}

export default Navbar;