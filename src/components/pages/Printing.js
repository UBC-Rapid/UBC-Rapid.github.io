import React from 'react';
import '../../App.css';
import './Printing.css';
import { Button } from '../Button';

export default function Printing() {
    return (

        <>
            <h1 className='printing'>PRINTING</h1>
            <div className='printing_wrapper'>
                <br /><br />
                <p><strong>Cost:</strong> Filament Costs Only (Specified Below)</p>
                <p><strong>Who can use this service:</strong> UBC Affiliated Teams, Students and Staff</p>
                <h2> HOW TO ORDER A PRINT </h2>
                <h4>*This service is exclusively available to groups and organizations
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
                    <a href="mailto:internal.ubcrapid@gmail.com" > internal.ubcrapid@gmail.com </a>.
                </h4>
                <br /><br />
                <h3>1. CONFIGURE YOUR PRINT SIZE</h3>
                <h4>UBC Rapid’s printers can print objects that can be contained within
                    a 250mm x 210mm x 200mm box (LxWxH) (with some exceptions).
                    If multiple individual objects fit on the single 200mm x 200mm print bed,
                    it will be considered a single print. Objects larger than this size will
                    need to be split up before printing.
                </h4>
                <br /><br />
                <h3>2. CHOOSE A PRINT RESOLUTION</h3>
                <h4>Higher resolution means higher surface quality and details, but longer print time.
                </h4>
                <center><img src="/images/print-resolution.jpg" alt=""></img></center>
                <h3>3. CHOOSE A FILAMENT</h3>
                <h4>
                    We recommend PLA because it is low cost and easy to work with.
                    More exotic materials, like PETT, are only available by special request.
                    Below is the list of available filaments and each one's estimated cost.
                    The price for a specific print will be disclosed in our response to your request.
                    <br /><br />
                    <strong>Thermoplastics</strong>
                    <table className='table'>
                        <tr>
                            <th>Filament</th>
                            <th>Price (cents/gram)</th>
                        </tr>
                        {[
                            { name: "PLA (Recommended)", price: "2-4\u00A2/g", link: "https://reprap.org/wiki/PLA" },
                            { name: "PETG", price: "2-4\u00A2/g", link: "https://reprap.org/wiki/PETG" },
                            { name: "ABS", price: "2-4\u00A2/g", link: "https://reprap.org/wiki/ABS" },
                            { name: "PETT", price: "2-6\u00A2/g", link: "https://3dinsider.com/pett-filament/" },
                            { name: "Polycarbonate", price: "3-6\u00A2/g", link: "https://reprap.org/wiki/Polycarbonate" },
                            { name: "TPU", price: "3-4\u00A2/g", link: "https://reprap.org/wiki/TPU" },
                            { name: "TPE", price: "3-9\u00A2/g", link: "https://all3dp.com/2/tpe-vs-tpu-flexible-filament-the-differences/" },
                            { name: "Wood Filament", price: "3-6\u00A2/g", link: "https://all3dp.com/2/wood-3d-printer-all-you-need-to-know-about-wood-3d-printing-2/" }
                        ].map((material, index) => (
                            <tr key={index}>
                                <td className='filamentLinks'>
                                    <a href={material.link} target="_blank" rel="noreferrer">
                                        {material.name}
                                    </a>
                                </td>
                                <td>
                                    {material.price}
                                </td>
                            </tr>
                        ))}
                    </table>
                </h4>
                <br /><br />
                <h3>4. SPECIFY AN INFILL DENSITY</h3>
                <h4>Higher density means more material and higher cost.
                </h4>
                <br /><br />
                <h3>5. CHOOSE A COLOUR</h3>
                <h4>We have a limited amount of colours available. Please contact us if you would
                    like a specific colour and we will accommodate depending on our availability of materials.
                </h4>
                <center><img src="/images/print-colours.jpg" alt=""></img></center>
                <h3>6. SPECIFY REQUIREMENTS</h3>
                <h4>If you have any special requests such as surface smoothing,
                    post-print processing, support removal, please contact us at the
                    link below for more details.
                </h4>
                <br /><br />
                <h3>7. FILL OUT OUR ORDER FORM</h3>
                <h4>The preferred file format for 3D models is .STL, although we can
                    accommodate other CAD file types if necessary. If you have an .STL file available
                    and ready, please fill out our order form.
                    Otherwise, if you don’t have an .STL file or don’t know what to print,
                    fill out a modelling form. Our team will be there to guide you.
                </h4>
                <br /><br />
                <h3>8. CONFIRMATION AND PAYMENT</h3>
                <h4>You should receive a quote for your print within 48 hours after
                    filling out an order. Our pricing model is designed for cost recuperation only
                    and is based on the amount of material used, as well as the type.
                    Please note that in order to use this service, you must
                    have access to a UBC bank account and internal journal vouchers, as we do not
                    accept cash or e-transfers as payment methods. When you decide to proceed,
                    we will accept payment through the UBC system.
                </h4>
                <br /><br />
                <h3>9. PICK UP</h3>
                <h4>Once we have your payment, your print should be ready for
                    pick up within 1~2 business weeks. More complex prints may
                    take more time. One of our Rapid members will contact
                    you when your print is ready to arrange a time and place.
                </h4>
                <br /><br />
                <div className="info-btns-printing">
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        newTab='true'
                        link='https://docs.google.com/forms/d/e/1FAIpQLSeYc03kn4aUe_7UCrVjeSEBoLD091kGHs8x3LOZ-kpC1nqdoQ/viewform' // this is the link I am updating
                    >
                        Order Now
                    </Button>
                    <br /><br />
                </div>
            </div>
        </>
    );
}
