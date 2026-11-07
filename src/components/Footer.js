import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import siteConfig from '../siteConfig.json';

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
                        <h3><Link to='/modelling' onClick={scrollToTop}>Modelling</Link></h3>
                    </div>
                    <div className='footer-link-items'>
                        <h3><Link to='/exotic_materials' onClick={scrollToTop}>Exotic Materials</Link></h3>
                    </div>
                    <div className='footer-link-items'>
                        <h3><Link to='/filament_recycler' onClick={scrollToTop}>Filament Recycler</Link></h3>
                    </div>
                    <div className='footer-link-items'>
                        <h3><Link to='/projects' onClick={scrollToTop}>Advancements</Link></h3>
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
                    </Link>
                   
                    <small className='website-rights'>UBC RAPID © {new Date().getFullYear()}</small>
                    <div className='social-icons'>
                        <a className='social-icon-link facebook'
                            target="_blank"
                            href={siteConfig.links.facebook}
                            aria-label='Facebook'
                            rel="noreferrer"
                        >
                           <i className='fab fa-facebook-f'></i> 
                        </a>
                        <a className='social-icon-link instagram'
                            target="_blank"
                            href={siteConfig.links.instagram}
                            aria-label='Instagram'
                            rel="noreferrer"
                        >
                            <i className='fab fa-instagram'></i>
                        </a>
                        <a className='social-icon-link linkedin'
                            target="_blank"
                            href={siteConfig.links.linkedin}
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
