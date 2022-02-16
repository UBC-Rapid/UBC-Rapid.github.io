import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
           <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Keep up to date with UBC Rapid on social media!
                </p>
                <p className='footer-subscription-text'>
                    Find us on Facebook, Instagram and Linkedin.
                </p>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/join-us'>How it works</Link>
                        <Link to='/printing'>Printing Service</Link>
                        <Link to='/consulting'>Consulting Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/join-us'>How it works</Link>
                        <Link to='/printing'>Printing Service</Link>
                        <Link to='/consulting'>Consulting Service</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/join-us'>How it works</Link>
                        <Link to='/printing'>Printing Service</Link>
                        <Link to='/consulting'>Consulting Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/join-us'>How it works</Link>
                        <Link to='/printing'>Printing Service</Link>
                        <Link to='/consulting'>Consulting Service</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link className='nav-logo'>
                            <img src="../images/rapid_logo.png" className='rapid-logo' />
                            {/* UBC RAPID <i className='fab fa-typo3' /> */}
                        </Link>
                    </div>
                    <small className='website-rights'>UBC RAPID © 2022</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                            to={{ pathname: 'https://www.facebook.com/ubc.rapid/' }}
                            target='_blank'
                            aria-label='Facebook'
                        >
                           <i className='fab fa-facebook-f'></i> 
                        </Link>
                        <Link className='social-icon-link instagram'
                            to={{ pathname: 'https://www.instagram.com/ubc_rapid/' }}
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link linkedin'
                            to={{ pathname: 'https://www.linkedin.com/company/ubc-rapid/' }}
                            target='_blank'
                            aria-label='Linkedin'
                        >
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
