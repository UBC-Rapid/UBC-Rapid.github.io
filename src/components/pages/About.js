import '../../App.css';
import TitleSection from '../TitleSection';
import CardItem from '../CardItem';
import './About.css';
import { Button } from '../Button';

function About() {
    return (
        <>
            <TitleSection />
            <div className='about_block'>
                <div className='about_container'>
                    <br></br>
                    <h1>About Us</h1>
                    <div className='about_wrapper'>
                        <p> UBC Rapid is an Engineering Student Team offering low cost Consulting and Printing Services 
                            at the University of British Columbia. Our major interest is rapid prototyping technology, 
                            the most popular of which is 3D-printing. Rapid prototyping describes the technique of using computer 
                            aided design (CAD) to generate physical models from product ideas.</p>
                    </div>
                    <h1>Our Printing and Consulting Services</h1>
                    <div className='about_wrapper'>
                        <ul className='cards_items'>
                            {/* media src in react js link from within src or using /public as root */}
                            <CardItem 
                                src='images/card-1.JPG'
                                text='Affordability'
                                subtext='Starting at $0.15 per gram, our 3D printing service is one of the most affordable on campus.'
                            />
                            <CardItem 
                                src='images/card-2.jpg'
                                text='Speed'
                                subtext='Our 5 operational printers means we offer the fastest turnaround time on campus.'
                            />
                            <CardItem 
                                src='images/card-3.jpg'
                                text='Quality'
                                subtext='With multiple resolution and infill settings, we offer a large range of quality prints for different purposes and price points.'
                            />
                            <CardItem 
                                src='images/card-4.JPG'
                                text='Support'
                                subtext='We offer free 3D CAD modelling assistance to anyone who needs to clean up or fix their model files for a better print.'
                            />
                        </ul>
                    </div>
                    <div className='about_wrapper'>
                        <h2>Don't know what to print or where to begin? We can help.</h2>
                        <br></br>
                        <h1>Our Team</h1>
                        <img src="/images/teamphoto2023.jpg" alt=""></img>
                    </div>
                    <div className="info-btns-about-us">
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            newTab='true'
                            link='https://linktr.ee/ubcrapid'
                        >
                            Contact Us
                        </Button>
                    </div>
                    <div className='sponsorship_wrapper'>
                        <h2>Want to support us or learn more about sponsorship? 
                            Check our our sponsorship package below.</h2>
                    </div>
                        <div className="sponsorship-btns-about-us">
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            newTab='true'
                            link='https://drive.google.com/file/d/1O22d1tCTD1DoHD2hmsdUT2E_NGCV5_eV/view?usp=sharing'
                        >
                            Sponsorship Package
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