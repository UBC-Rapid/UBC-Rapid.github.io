import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                        <h3><Link to='/' onClick={scrollToTop}>About Us</Link></h3>

                        {/*<Link to='/join-us'>How it works</Link> *** Extra smaller links below if needed
                        <Link to='/printing'>Printing Service</Link>
                        <Link to='/consulting'>Consulting Service</Link>*/}
                    </div>
                    <div className='footer-link-items'>
                        <h3><Link to='/printing' onClick={scrollToTop}>Printing</Link></h3>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                        <h3><Link to='/modelling' onClick={scrollToTop}>Modelling</Link></h3>
                    </div>
                    <div className='footer-link-items'>
                        <h3><Link to='/join-us' onClick={scrollToTop}>Join Us</Link></h3>
                    </div>
                </div>

                
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                
                    <Link to='/' onClick={scrollToTop} className='footer-logo'>
                        <img src='/images/rapid_logo.png' className='rapid-logo' alt="" />
                        {/* UBC RAPID <i className='fab fa-typo3' /> */}
                    </Link>
                   
                    <small className='website-rights'>UBC RAPID © 2024</small>
                    <div className='social-icons'>
                        <a className='social-icon-link facebook'
                            target="_blank"
                            href="https://www.facebook.com/ubc.rapid/"
                            aria-label='Facebook'
                            rel="noreferrer"
                        >
                           <i className='fab fa-facebook-f'></i> 
                        </a>
                        <a className='social-icon-link instagram'
                            target="_blank"
                            href="https://www.instagram.com/ubc_rapid/?hl=en"
                            aria-label='Instagram'
                            rel="noreferrer"
                        >
                            <i className='fab fa-instagram'></i>
                        </a>
                        <a className='social-icon-link linkedin'
                            target="_blank"
                            href='https://www.linkedin.com/company/ubc-rapid/'
                            aria-label='Linkedin'
                            rel="noreferrer"
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
