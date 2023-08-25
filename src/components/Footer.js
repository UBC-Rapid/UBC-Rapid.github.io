import React from 'react';
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
                <p className='footer-subscription-text'></p>
                <p className='footer-subscription-text'>
                    Put in a request for any of our services all throughout the school year.
                </p>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h3><Link to='/'>About Us</Link></h3>

                        {/*<Link to='/join-us'>How it works</Link> *** Extra smaller links below if needed
                        <Link to='/printing'>Printing Service</Link>
                        <Link to='/consulting'>Consulting Service</Link>*/}
                    </div>
                    <div className='footer-link-items'>
                        <h3><Link to='/printing'>Printing</Link></h3>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                        <h3><Link to='/consulting'>Consulting</Link></h3>
                    </div>
                    <div className='footer-link-items'>
                        <h3><Link to='/join-us'>Join Us</Link></h3>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                
                    <Link to='/' className='footer-logo'>
                        <img src='/images/rapid_logo.png' className='rapid-logo' alt="" />
                        {/* UBC RAPID <i className='fab fa-typo3' /> */}
                    </Link>
                   
                    <small className='website-rights'>UBC RAPID © 2022</small>
                    <div className='social-icons'>
                        <a className='social-icon-link facebook'
                            href="https://www.facebook.com/ubc.rapid/"
                            aria-label='Facebook'
                        >
                           <i className='fab fa-facebook-f'></i> 
                        </a>
                        <a className='social-icon-link instagram'
                            href="https://www.instagram.com/ubc_rapid/?hl=en"
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram'></i>
                        </a>
                        <a className='social-icon-link linkedin'
                            href='https://www.linkedin.com/company/ubc-rapid/'
                            aria-label='Linkedin' 
                        >
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
