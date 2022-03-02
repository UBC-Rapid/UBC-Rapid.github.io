import '../../App.css';
import TitleSection from '../TitleSection';
import CardItem from '../CardItem';
import './About.css';
import { Button } from '../Button';

function About() {
    return (
        <>
            <TitleSection />

            <div className='info'>
                <div className='info_container'>
                    <h1>About Us</h1>
                    <div className='info_wrapper'>
                        <p> UBC Rapid is an Engineering Student Team offering low cost Consulting and Printing Services 
                            at the University of British Columbia. Our major interest is rapid prototyping technology, 
                            the most popular of which is 3D-printing. Rapid prototyping describes the technique of using computer 
                            aided design (CAD) to generate physical models from product ideas.</p>
                        {/* <ul className='info_items'></ul> */}
                    </div>
                    <h1>Our Printing and Consulting Services</h1>
                    <div className='info_wrapper'>
                        <ul className='cards_items'>
                            <CardItem 
                                src='images/img-9.jpg'
                                text='Check our Printing Service'
                                label='3D Printing'
                                path='/printing'
                            />
                            <CardItem 
                                src='images/img-2.jpg'
                                text='Check our Printing Service'
                                label='3D Printing'
                                path='/printing'
                            />
                            <CardItem 
                                src='images/img-9.jpg'
                                text='Check our Printing Service'
                                label='3D Printing'
                                path='/printing'
                            />
                            <CardItem 
                                src='images/img-2.jpg'
                                text='Check our Printing Service'
                                label='3D Printing'
                                path='/printing'
                            />
                        </ul>
                    </div>
                    <div className='info_wrapper'>
                        <h3>Don't know what to print or where to begin? We can help.</h3>
                        <Button 
                            className='btns' 
                            buttonStyle='btn--outline'
                            buttSize='btn--large'
                        >
                            Consulting Service
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;