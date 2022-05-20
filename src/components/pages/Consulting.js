import React from 'react';
import '../../App.css';
import './Consulting.css';

export default function Consulting() {
    return (
        <>
            <h1 className='consulting'>CONSULTING</h1>
            <div className='info-container'>
                <h2>OUR OBJECTIVE</h2>
                <div className='info-container'>
                <div class='body'><p><strong>Our goal is to help you develop your product by pairing you with our group of experienced CAD designers and engineering students. We can connect you with our 3D printing service or help you <br/>- Model<br/>- Prototype<br/>- or plan for manufacturing.<br/>to make your product a reality. We have worked with clients from the general public to various industries and fields of academia.</strong></p></div>
                <div class='header'><h2>PRICING</h2></div>
                <div class='body'><p><strong>Our consulting fee is $30-$50 depending on the length and complexity of the project.</strong></p></div>
                <div class='header'><h2>1. Submit Form</h2></div>
                <div class='body'><p><strong>
                Fill out the form at the bottom of the page to give us the details about who you are, your project and how we can help you.
                </strong></p></div>
                <div class='header'><h2>2. Wait for our Response</h2></div>
                <div class='body'><p><strong>
                We will get back to you within 1 - 2 days to set up an initial consultation session that is usually done via Zoom.
                </strong></p></div>
                <div class='header'><h2>3. Product Development</h2></div>
                <div class='body'><p><strong>
                After the initial consultation to discuss the needs and design specifications for your project, we will brainstorm and generate multiple CAD prototypes. These designs will be presented to you in subsequent meetings. This process may undergo multiple iterations based on client feedback until the final product is developed.
                </strong></p></div>
                <div class='header'><h2>4. Printing</h2></div>
                <div class='body'><p><strong>
                If you choose to print the final product via our printing service we will give you a $5 discount!
                </strong></p></div>
            </div>
            </div>        
        </>
    );
}
