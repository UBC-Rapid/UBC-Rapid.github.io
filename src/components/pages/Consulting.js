import React from 'react';
import '../../App.css';
import './Consulting.css';

export default function Consulting() {
    return (
        <>  
            <h1 className='consulting'>CONSULTING</h1>
            <div className='info-container'>
                <h2 id="title">OUR OBJECTIVE</h2>
                <div class='body-one'><p>Our goal is to help you develop your product by pairing you with our group of experienced CAD designers 
                    and engineering students. We can connect you with our 3D printing service or help you with:
                    <ul>
                        <li>Model</li>
                        <li>Prototype</li>
                        <li>Plan for Manufacturing</li>
                    </ul>
                    We have worked with clients from the general public to various industries and fields of academia.</p></div>
                <div class='fee'>
                    <div>
                    <h2>PRICING</h2>
                    <p>Our consulting fee is <strong>$30 - $50</strong> depending on the length and complexity of the project.</p>
                    </div>
                </div>
                <div class='third-section'>
                    <div class='steps-to-consult'>
                        <div class='step'>
                            <h2>1. Submit Form</h2>
                            <p>Fill out the form at the bottom of the page to give us the 
                                details about who you are, your project and how we can help you.</p>
                            </div>
                        <div class='step'>
                            <h2>2. Wait for our Response</h2>
                            <p>
                            We will get back to you within 1 - 2 days to set up an initial consultation session that is usually done via Zoom.
                            </p>
                            </div>
                        <div class='step'>
                        <h2>3. Product Development</h2>
                            <p>
                            After the initial consultation to discuss the needs and design specifications for your project, we will brainstorm and generate multiple CAD prototypes. These designs will be presented to you in subsequent meetings. This process may undergo multiple iterations based on client feedback until the final product is developed.
                            </p>
                            </div>
                        <div class='step'>
                            <h2>4. Printing</h2>
                            <p>
                            If you choose to print the final product via our printing service we will give you a $5 discount!
                            </p>
                        </div>
                    </div>
                    <img src='/images/consulting1.png' alt='consulting image 1'></img>
                </div>
            </div>      
        </>
    );
}
