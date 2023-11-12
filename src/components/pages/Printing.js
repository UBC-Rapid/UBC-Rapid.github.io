import React from 'react';
import '../../App.css';
import './Printing.css';
import { Button } from '../Button';

export default function Printing() {
    return (
        <>
            <h1 className='printing'>PRINTING</h1>
            <div className='printing_wrapper'>
                <h2> HOW TO ORDER A PRINT </h2> 
                <p>*This service is exclusively available to groups and organizations 
                    affiliated with the University of British Columbia. If you fall 
                    under any of the following categories, you are eligible to complete this form:
                    <ul className='list'>
                        <li>UBC research teams</li>
                        <li>UBC design teams</li>
                        <li>UBC-affiliated organizations</li>
                    </ul>
                    Unfortunately, we are unable to fulfill requests for personal 
                    (non-UBC affiliated) or commercial purposes. If you are uncertain 
                    about your eligibility, or have further questions or concerns about your print, 
                    please reach out to us at
                    <a href="mailto:internal.ubcrapid@gmail.com"> internal.ubcrapid@gmail.com</a>.
                </p>
                <br /><br />
                <h3>1. CONFIGURE YOUR PRINT SIZE</h3>
                <p>UBC Rapid’s printers can print objects that can be contained within 
                    a 250mm x 210mm x 200mm box (LxWxH) (with some exceptions). 
                    If multiple individual objects fit on the single 200mm x 200mm print bed, 
                    it will be considered a single print. Objects larger than this size will 
                    need to be split up before printing.
                </p>
                <br /><br />
                <h3>2. CHOOSE A PRINT RESOLUTION</h3>
                <p>Higher resolution means higher surface quality and details, but longer print time.
                </p>
                <center><img src="/images/print-resolution.jpg" alt=""></img></center>
                <h3>3. CHOOSE A FILAMENT</h3>
                <p>We recommend PLA because it is low cost and easy to work with. 
                    More exotic materials, like Nylon and PETT, are only available 
                    by special request. The prices for filament will be disclosed in our 
                    response to your request.
                    <br /><br />
                    <strong>Thermoplastics</strong>
                    <ul className='list'>
                        <li><a href="https://reprap.org/wiki/PLA" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PLA (recommended)</a></li>
                        <li><a href="https://reprap.org/wiki/PETG" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PETG</a></li>
                        <li><a href="https://reprap.org/wiki/ABS" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            ABS</a></li>
                        <li><a href="https://filaments.ca/pages/search-results-page?q=pett" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PETT</a></li>
                        <li><a href="https://reprap.org/wiki/Polycarbonate" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PolyCarbonate</a></li>
                        <li><a href="https://filaments.ca/pages/search-results-page?q=copolyester" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Copolyester</a></li>
                        <li><a href="https://filaments.ca/products/moldlay-filament-1-75mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Moldlay</a></li>
                        <li><a href="https://filaments.ca/search?options%5Bunavailable_products%5D=show&options%5Bprefix%5D=last&q=rubber+tpu" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Rubber UglyFlex TPU</a></li>
                        <li><a href="https://filaments.ca/search?options%5Bunavailable_products%5D=show&options%5Bprefix%5D=last&q=tpe" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            TPE</a></li>
                        <li><a href="https://filaments.ca/collections/1-75mm-3d-filaments/products/easywood-filament-birch-1-75mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Wood Filament - Birch</a></li>
                        <li><a href="https://filaments.ca/products/easycork-cork-filament-2-85mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Wood Filament - Cork</a></li>
                        <li><a href="https://filaments.ca/products/esun-esilk-pla-filament-silk-copper-1-75mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Wood Filament - Silk Copper</a></li>
                    </ul>
                </p>
                <br /><br />
                <h3>4. SPECIFY AN INFILL DENSITY</h3>
                <p>Higher density means more material and higher cost.
                </p>
                <br /><br />
                <h3>5. CHOOSE A COLOUR</h3>
                <p>We have a limited amount of colours available. Please contact us if you would 
                    like a specific colour and we will accommodate depending on our availability of materials.
                </p>
                <center><img src="/images/print-colours.jpg" alt=""></img></center>
                <h3>6. SPECIFY REQUIREMENTS</h3>
                <p>If you have any special requests such as surface smoothing, 
                    post-print processing, support removal, please contact us at the 
                    link below for more details.
                </p>
                <br /><br />
                <h3>7. FILL OUT OUR ORDER FORM</h3>
                <p>The preferred file format for 3D models is .STL, although we can 
                    accommodate other CAD file types if necessary. If you have an .STL file available 
                    and ready, please fill out our order form. 
                    Otherwise, if you don’t have an .STL file or don’t know what to print, 
                    fill out a modelling form. Our team will be there to guide you.
                </p>
                <br /><br />
                <h3>8. CONFIRMATION AND PAYMENT</h3>
                <p>You should receive a quote for your print within 48 hours after 
                    filling out an order. Our pricing model is designed for cost recuperation only 
                    and is based on the amount of material used, as well as the type. 
                    Please note that in order to use this service, you must 
                    have access to a UBC bank account and internal journal vouchers, as we do not 
                    accept cash or e-transfers as payment methods. When you decide to proceed, 
                    we will accept payment through the UBC system. 
                </p>
                <br /><br />
                <h3>9. PICK UP</h3>
                <p>Once we have your payment, your print should be ready for 
                    pick up within 1~2 business weeks. More complex prints may 
                    take more time. One of our Rapid members will contact 
                    you when your print is ready to arrange a time and place. 
                </p>
                <br /><br />
                <div className="info-btns-printing">
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    newTab='true'
                    link='https://forms.gle/hfnkkL21TheeSDhj6'
                >
                    Order Now
                </Button>
                <br /><br />
                </div>
            </div>
        </>
    );
}
