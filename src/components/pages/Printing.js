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
                <p>*If you do not have a 3D model ready, you can fill out a consulting 
                    form instead. Our support team will be there to guide you.
                </p>
                <br /><br />
                <h3>1. CONFIGURE YOUR PRINT SIZE</h3>
                <p>UBC Rapid’s printers can print objects that can be contained within 
                    a 250mm x 210mm x 200mm box (LxWxH). If multiple individual objects 
                    fit on the single 200mm x 200mm print bed, it will be considered a 
                    single print. If multiple objects are requested and each one must 
                    be printed individually, each print will be charged the $5.00 setup fee.
                </p>
                <br /><br />
                <h3>2. CHOOSE A PRINT RESOLUTION</h3>
                <p>Higher resolution means higher quality, but slower print time. 
                </p>
                <center><img src="/images/print-resolution.jpg" alt=""></img></center>
                <p>*An additional setup fee of $2 applies for a print resolution 
                    of 0.10 mm or less.
                </p>
                <br /><br />
                <h3>3. CHOOSE A FILAMENT</h3>
                <p>We recommend PLA because it is low cost and easy to work with. 
                    More exotic materials, like Nylon and PETT, are only available 
                    by special request.
                </p>
                <center><table>
                    <thead>
                    <tr>
                        <th>Thermoplastic</th>
                        <th>Cost per gram</th>
                        <th>Availability</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><a href="https://reprap.org/wiki/PLA" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PLA (recommended)</a></td>
                        <td>$0.15</td>
                        <td>All Colours</td>
                    </tr>
                    <tr>
                        <td><a href="https://reprap.org/wiki/PETG" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PETG</a></td>
                        <td>$0.20</td>
                        <td>All Colours + transparent</td>
                    </tr>
                    <tr>
                        <td><a href="https://reprap.org/wiki/ABS" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            ABS</a></td>
                        <td>$0.30</td>
                        <td>Currently Unavailable</td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/pages/search-results-page?q=pett" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PETT</a></td>
                        <td>Contact Us</td>
                        <td>Currently Unavailable</td>
                    </tr>
                    <tr>
                        <td><a href="https://reprap.org/wiki/Polyamide" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Nylon</a></td>
                        <td>$0.50</td>
                        <td>Currently Unavailable</td>
                    </tr>
                    <tr>
                        <td><a href="https://reprap.org/wiki/Polycarbonate" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            PolyCarbonate	</a></td>
                        <td>$0.50</td>
                        <td>Currently Unavailable</td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/pages/search-results-page?q=copolyester" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Copolyester</a></td>
                        <td>$0.50</td>
                        <td>Limited quantity / On Special Request</td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/products/moldlay-filament-1-75mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Moldlay</a></td>
                        <td>$0.50</td>
                        <td>Limited quantity / On Special Request</td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/search?options%5Bunavailable_products%5D=show&options%5Bprefix%5D=last&q=rubber+tpu" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Rubber UglyFlex TPU</a></td>
                        <td>$0.50</td>
                        <td>Limited quantity / On Special Request</td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/search?options%5Bunavailable_products%5D=show&options%5Bprefix%5D=last&q=tpe" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            TPE</a></td>
                        <td>$0.50</td>
                        <td>Limited quantity / On Special Request</td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/collections/1-75mm-3d-filaments/products/easywood-filament-birch-1-75mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Wood Filament - Birch</a></td>
                        <td>Contact Us</td>
                        <td>Limited quantity / On Special Request</td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/products/easycork-cork-filament-2-85mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Wood Filament - Cork</a></td>
                        <td>Contact Us</td>
                        <td>Limited quantity / On Special Request</td>
                    </tr>
                    <tr>
                        <td><a href="https://filaments.ca/products/esun-esilk-pla-filament-silk-copper-1-75mm" 
                            nclick="window.open(this.href); return false;" target="_blank" rel="noreferrer">
                            Wood Filament - Silk Copper</a></td>
                        <td>Contact Us</td>
                        <td>Limited quantity / On Special Request</td>
                    </tr>
                    </tbody>
                </table></center>
                <br /><br />
                <h3>4. SPECIFIY AN INFILL DENSITY</h3>
                <p>Higher density means more material and higher cost.
                </p>
                <br /><br />
                <h3>5. CHOOSE A COLOUR</h3>
                <p>We have all colours available below, as well as black, white, 
                    silver, and gold.
                </p>
                <center><img src="/images/print-colours.JPG" alt=""></img></center>
                <h3>6. SPECIFY REQUIREMENTS</h3>
                <p>Additional fees may apply for special requests such as surface smoothing, 
                    post-print processing, support removal, etc. Please contact us at the 
                    link below for more details.
                </p>
                <br /><br />
                <h3>7. FILL OUT OUR ORDER FORM</h3>
                <p>If you have an .STL file available and ready, please fill out our 
                    order form. You should receive a quote for your print within 48 hours. 
                    Otherwise, if you don’t have an .STL file or don’t know what to print, 
                    fill out a consulting form. Our support team will be there to guide you.
                </p>
                <br /><br />
                <h3>8. CONFIRMATION AND PAYMENT</h3>
                <p>You should receive a quote for your print within 48 hours after filling 
                    out an order, when you can then make a cash payment at Hennings 122 
                    or arrange alternative payment methods with us. 
                </p>
                <br /><br />
                <h3>9. PICK UP</h3>
                <p>Once we have your payment, your print should be ready for pick up 
                    within 5-7 business days. More complex prints may take more time. 
                    Rush orders may be completed in 2-3 business days if no problems 
                    are encountered and are subject to a 10%+$5 fee. Please come to 
                    Hennings 112 to pick up your print when you receive an email 
                    notification from us.  Delivery may be arranged for additional charge.
                </p>
                <br /><br />
                <div className="info-btns-printing">
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    OnClick="window.open(this.href); return false;"
                    link='https://docs.google.com/forms/d/1fHBhsOu6otlXZHiqFhmgtjYRDYMIfBZbN4hVD4HhOBM/viewform?edit_requested=true'
                >
                    Order Now
                </Button>
                <br /><br />
                </div>
            </div>
        </>
    );
}
