import '../../App.css';
import TitleSection from '../TitleSection';
import CardItem from '../CardItem';
import './About.css';
import '../Cards.css'
import { Button } from '../Button';

import React, {useState} from "react";
import CubeItem from "./CubeItem";

function About() {

    const [angle, setAngle] = useState(0);

    const rotateLeft = () => {
        setAngle(prev => prev - 90);
    };

    const rotateRight = () => {
        setAngle(prev => prev + 90);
    };


    return (
        <>
            <TitleSection />
            <div className='about_block'>
                <div className='about_container'>
                    <br></br>
                    <h1>About Us</h1>
                    <div className='about_wrapper'>
                        <p> UBC Rapid is an Engineering Student Team offering CAD Modelling
                            at the University of British Columbia. Our major interest is rapid prototyping technology, 
                            the most popular of which is 3D-printing. Rapid prototyping describes the technique of using computer 
                            aided design (CAD) to generate physical models from product ideas.</p>
                    </div>
                    <h1>Our Team Projects and Services</h1>
                    <div className="about_wrapper">
                    <ul className="cards__items">
                        {/* CardItem components with links */}

                        <CardItem
                        images={["/images/Model4_bg.png", "/images/Model2_bg.png", "/images/model5.png"]}
                        text="Modelling Service"
                        subtext="Our free 3D Modelling Service pairs experienced CAD designers and engineering students with individuals to create high-quality, non-commercial 3D models for personal projects and unique inventions."
                        path="/modelling"
                        />
                        <CardItem
                        images={["/images/projects7.jpg", "/images/projects7.jpg", "/images/projects7.jpg"]}
                        src="images/card-3.jpg"
                        text="Filament Recycler"
                        subtext="Our team is designing and building a Filament Recycler to promote sustainable 3D printing by converting waste, such as failed prints and supports, into reusable filament."
                        path="/projects"
                        scrollPos={window.innerHeight * 0.75}
                        />
                        <CardItem
                        images={["/images/exoticmaterials1.jpg", "/images/exotic_cropped.png"]}
                        src="images/card-4.JPG"
                        text="Exotic Materials Research"
                        subtext="We are expanding our range of printable materials by researching the properties and feasibility of using innovative options like copper-infused filament, nylon, and many others."
                        path="/projects"
                        scrollPos={window.innerHeight * 1.4}
                        />
                    </ul>
                    </div>
                    
                    <div className='about_wrapper'>
                        <h1>Our Team</h1>
                        <img src="images/teamphoto2025.jpg" alt=""></img>
                    </div>
                    <div className="info-btns-about-us">
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttSize='btn--large'
                            newTab='true'
                            link='https://linktr.ee/ubcrapid'
                        >
                            Contact Us
                        </Button>
                    </div>
                    <div className='sponsorship_wrapper'>
                        <h1>Our Sponsors</h1>
                    </div>
                    <div className='sponsors_wrapper'>
                        <a href='https://www.onshape.com/en/' target="_blank" rel="noreferrer" style={{ width: '300px', margin: '0 5px' }}>
                            <img src="/images/onshape.jpg" alt="" style={{ width: '100%', height: 'auto' }} />
                        </a>
                        <a href='https://www.matter3d.com/' target="_blank" rel="noreferrer" style={{ width: '150px', margin: '0 5px' }}>
                            <img src="/images/M3D.png" alt="" style={{ width: '100%', height: 'auto' }} />
                        </a>
                    </div>
                    <div className='sponsorship_wrapper'>
                        <h2>Want to learn more about sponsorships? 
                            Check our our Sponsorship Package below.</h2>
                    </div>
                    <div className="info-btns-about-us">
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttSize='btn--medium'
                            newTab='true'
                            link='https://drive.google.com/file/d/1T509EAUtGzbmfX_KZrQIv5QqKSpH1fFi/view?usp=sharing'
                        >
                            Sponsorship Package
                        </Button>
                    </div>
                    <div className='sponsorship_wrapper'>
                        <h2>Want to support us by donating? 
                            Check out the links below.</h2>
                    </div>
                    <div className="sponsorship-btns-about-us">
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttSize='btn--medium'
                            newTab='true'
                            link='https://donate.give.ubc.ca/page/80953/donate/1?transaction.dirgift=UBC+Rapid%20G1273'
                        >
                            Donation Link for Organizations
                        </Button>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttSize='btn--large'
                            newTab='true'
                            link='https://give.ubc.ca/'
                        >
                            Donation Link for Individuals
                        </Button>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;

