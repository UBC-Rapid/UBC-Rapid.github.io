import React from 'react';
import '../../App.css';
import './Consulting.css';
import { Button } from '../Button';

export default function Consulting() {
    return (
        <>
            <h1 className='consulting'>MODELLING</h1>
            <div className='consulting_wrapper'>
                <h2> HOW TO USE OUR SERVICE </h2>
                <br /><br /> 
                <p><strong>Cost:</strong> FREE</p>
                <p><strong>Who can use this service:</strong> UBC Affiliated Teams, Students and Staff</p>
                <h3>OUR OBJECTIVE</h3>
                <p>Welcome to our free 3D Modelling Service! Our goal is to help transform your 
                    creative ideas into reality by pairing you with experienced CAD designers and 
                    enthusiastic engineering students. Whether you have a personal project, a hobby, 
                    or a unique invention you have always wanted to visualize in 3D, our service is 
                    designed to provide you with high-quality CAD modelling at no cost. 
                </p>
                <p>We believe in fostering a spirit of collaboration and learning, which is why we do 
                    not engage in designing models for commercial, profitable, or non-personal purposes.
                    We have worked with clients from the general public to various industries and 
                    fields of academia. Not sure if our service is for you? Fill out our inquiry 
                    form and we will look at your project to see if we can help!
                </p>
                <br /><br /> 
                <div className='consulting_img_wrapper'>
                    {/* <center><img src="/images/Model1.png" alt=""></img></center>  
                    <center><img src="/images/Model2.png" alt=""></img></center>
                    <center><img src="/images/Model3.png" alt=""></img></center> */}

                    {/* <img src="/images/Model1.png" alt="Model 1" />
                    <img src="/images/Model2.png" alt="Model 2" />
                    <img src="/images/Model3.png" alt="Model 3" /> */}

                    <figure>
                        <img src="/images/Model1.png" alt="Model 1" />
                        <figcaption>Model 1</figcaption>
                    </figure>
                    <figure>
                        <img src="/images/Model2.png" alt="Model 2" />
                        <figcaption>Model 2</figcaption>
                    </figure>
                    <figure>
                        <img src="/images/Model3.png" alt="Model 3" />
                        <figcaption>Model 3</figcaption>
                    </figure>
                </div>
                <h3>1. SUBMIT FORM</h3>
                <p>Fill out the form at the bottom of the page to give us the details 
                    about who you are, your project and how we can help you.
                </p>
                <br /><br />   
                <h3>2. WAIT FOR OUR RESPONSE</h3>
                <p>We will get back to you within 2 - 4 days to discuss the feasibility and 
                    specific details of your project.
                </p>
                <br /><br />  
                <h3>3. PRODUCT DEVELOPMENT</h3>
                <p>After the initial consultation to discuss the needs and design 
                    specifications for your project, we will begin prototyping. This process may 
                    undergo multiple iterations based on your feedback until you are 
                    satisfied with the final product!
                </p>
                <br /><br />   
                <div className="info-btns-consulting">
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        newTab='true'
                        link='https://forms.gle/MJu7KgkTge59sSiy5'
                    >
                        Order Now
                    </Button>
                </div>
                <br /><br />
            </div>
        </>
    );
}
