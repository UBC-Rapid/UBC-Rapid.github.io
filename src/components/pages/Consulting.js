import React from 'react';
import '../../App.css';
import './Consulting.css';
import { Button } from '../Button';

export default function Consulting() {
    return (
        <>
            <h1 className='consulting'>CONSULTING</h1>
            <div className='consulting_wrapper'>
                <h2> HOW TO BOOK A CONSULTATION </h2>
                <br /><br /> 
                <h3>OUR OBJECTIVE</h3>
                <p>Our goal is to help you develop your product by pairing you with our 
                    group of experienced CAD designers and engineering students. We can 
                    connect you with our 3D printing service or help you.
                </p>
                <ul>
                    <li>How to use software required to operate UBC Rapid’s 3D printers</li>
                    <li>Operating and troubleshooting 3D printers</li>
                    <li>General 3D printer safety orientations</li>
                </ul>
                <p>to make your product a reality. We have worked with clients from the 
                general public to various industries and fields of academia.
                </p>
                <br /><br /> 
                <center><img src="/images/consulting2.png" alt=""></img></center>
                <h3>PRICING</h3>
                <p>Our consulting fee is $30-$50 depending on the length and complexity 
                    of the project.
                </p>
                <br /><br />   
                <center><img src="/images/consulting1.png" alt=""></img></center>
                <h3>1. SUBMIT FORM</h3>
                <p>Fill out the form at the bottom of the page to give us the details 
                    about who you are, your project and how we can help you.
                </p>
                <br /><br />   
                <h3>2. WAIT FOR OUR RESPONSE</h3>
                <p>We will get back to you within 1 - 2 days to set up an initial 
                    consultation session that is usually done via Zoom.
                </p>
                <br /><br />  
                <h3>3. PRODUCT DEVELOPMENT</h3>
                <p>After the initial consultation to discuss the needs and design 
                    specifications for your project, we will brainstorm and generate 
                    multiple CAD prototypes. These designs will be presented to you in 
                    subsequent meetings. This process may undergo multiple iterations 
                    based on client feedback until the final product is developed.
                </p>
                <br /><br />   
                <h3>4. PRINTING</h3>
                <p>If you choose to print the final product via our printing service we 
                    will give you a $5 discount!
                </p>
                <br /><br />
                <div className="info-btns-consulting">
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    OnClick="window.open(this.href); return false;"
                    link='https://docs.google.com/forms/d/e/1FAIpQLSeb8O365rpcZojkts_luhRQp6LPY3-MFesKHeF3gASIEXF0VQ/viewform?usp=sf_link'
                >
                    Order Now
                </Button>
                <br /><br />
                </div>
            </div>
        </>
    );
}
