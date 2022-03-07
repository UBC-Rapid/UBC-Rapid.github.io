import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
           <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Follow UBC Rapid on Social Media!
                </p>
                <p className='footer-subscription-text'>
                    Some more text.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
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
                    <Link to='/' className='footer-logo'>                        
                            <img src="../images/rapid_logo.jpg"  className='rapid-logo'/> 
                    </Link>

                    <small className='website-rights'>UBC RAPID © 2022</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                           <i className='fab fa-facebook-f'></i> 
                        </Link>
                        <Link className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link linkedin'
                            to='/'
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
