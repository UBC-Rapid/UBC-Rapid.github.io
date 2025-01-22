import React from 'react';
import '../../App.css';
import './JoinUs.css';
import { Button } from '../Button';

export default function JoinUs() {
    return (
        <>
            <h1 className='join-us'>JOIN US</h1>
            <div className='joinus_wrapper'>
            <br /><br />
                <h3>The applications for 2024/25 have closed.</h3>
                <br /><br />
                <p>We are recruiting members to work in our sub-teams, as the demands for 
                    CAD Modelling, printer repair and 3D Printing orders have increased over the years. 
                    We are also hiring for outreach positions. 
                    New members will be attending our 
                    workshops to learn prototyping and 3d printing basics. Once they gain adequate 
                    experience, they will be welcome to contribute to our service or project sub-teams.
                    In the service sub-teams they will be paired with a mentor to help with orders 
                    and gain real professional experience with stakeholders. Or they can join our 
                    project sub-teams and partake in the construction of original
                    UBC Rapid projects!
                    <br /><br />
                    By joining UBC Rapid, you will also get the chance to build and repair 3D 
                    printers, and gain experience printing with exotic materials. 
                    Regardless of experience level, we are looking for dedicated 
                    individuals willing to put in the time and effort to learn.
                </p>
                {/* <p>Linked below is the application form for UBC Rapid. Please answer 
                    all the required questions. If selected for an interview, you 
                    will receive an email during the application time frame to                             
                    book an interview. The interview is expected to take up to 
                    30 minutes. Interviews will be on a rolling basis. You 
                    will likely be asked to describe the functioning of an FDM 
                    3D printer at a basic level, as well as the process to 3D print 
                    a part. We care less about the correctness of the answers, and 
                    more about the effort and critical thinking of the responses.
                    <br /><br />
                </p>
                <br /><br />
                UPDATE APPLICATION FORM LINK HERE!
                <div className="info-btns-joinus">
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        newTab='true'
                        link='https://forms.gle/RYVh95frtJTTT3UR6'
                    >
                        UBC Rapid Application Form
                    </Button>
                </div>
                <br /><br />
                <p>We are considering a wide array of skill sets, such as 
                    people from various majors with artistic skill or 
                    business/accounting skills. The most important thing we are 
                    looking for are dedicated people that will grow with the team.<br /><br />
                    We look forward to meeting you!
                </p> */}
                <br /><br />
            </div>
        </>
    );
}