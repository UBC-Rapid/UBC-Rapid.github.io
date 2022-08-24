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
                <p>We are recruiting members to work in our consulting and 3d printing 
                    sub-teams, as the demands for prototyping and 3d printing orders 
                    have increased over the years. Newer members will be attending our 
                    workshops to learn prototyping and 3d printing basics, while paired 
                    with a mentor to help with some requests and gain real professional 
                    experience with stakeholders.<br /><br />
                    Our new printer design sub-team is also making progress on 
                    the design and construction of a new compact 3d printer, 
                    which is now in its integration stages and on track to complete this year!
                    Once members gain adequate experience, they will also be welcome to contribute 
                    to that sub-team and be part of the construction of the first 
                    UBC Rapid original printer! <br /><br />
                    By joining UBC Rapid, you will go through an intensive workshop 
                    on 3D printing, be paired with an experienced mentor to work on 
                    real projects, get the chance to build and repair your own 3D 
                    printer, and experience printing with exotic materials. 
                    Regardless of experience level, we are looking for dedicated 
                    individuals willing to put in the time and effort to learn.
                </p>
                <br /><br />
                <h3>The applications open on August 25th 2022 and will close September 16th 2022 @ 11:59 PM.</h3>
                <br /><br />
                <p>Linked below is the application form for UBC Rapid. Please answer 
                    all the required questions. If selected for an interview, you 
                    will receive an email during the application time frame to                             
                    book an interview. The interview is expected to take up to 
                    30 minutes. Interviews will be on a rolling basis. You 
                    will likely be asked to describe the functioning of an FDM 
                    3D printer at a basic level, as well as the process to 3D print 
                    a part. We care less about the correctness of the answers, and 
                    more about the effort and critical thinking of the responses.
                </p>
                <br /><br />
                {/* UPDATE APPLICATION FORM LINK HERE! */}
                <div className="info-btns-joinus">
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        newTab='true'
                        link='https://forms.gle/ejQHmVSGqVZomsd88'
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
                </p>
                <br /><br />
            </div>
        </>
    );
}