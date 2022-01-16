import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // render button only once
    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                <img src="../images/rapid_logo.jpg" className="navbar-logo" />
                    {/* <Link to='/' className='navbar-logo'>
                        UBC Rapid <i className='fab fa-typo3'/>
                    </Link> */}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/printing' className='nav-links' onClick={closeMobileMenu}>
                                Printing Service
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/consulting' className='nav-links' onClick={closeMobileMenu}>
                                Consulting Service
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/join-us' className='nav-links' onClick={closeMobileMenu}>
                                Join Us
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>JOIN US</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;