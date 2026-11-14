import React from 'react';
import '../../App.css';
import './JoinUs.css';
import { Button } from '../Button';
import siteConfig from '../../siteConfig.json';

export default function JoinUs() {
    return (
        <>
            <h1 className='join-us'>JOIN US</h1>
            <div className='joinus_wrapper'>
            <br /><br />
                {siteConfig.applicationsOpen ? (
                    <h3>Applications for {siteConfig.applicationYear} are now open!</h3>
                ) : (
                    <h3>Applications for {siteConfig.applicationYear} have closed</h3>
                )}
                <br /><br />
                <p>At UBC Rapid, members gain hands-on experience with prototyping and 3D printing.
                    New members start with workshops on the basics. After that, you can join a
                    service sub-team, where you're paired with a mentor to help with client orders,
                    or a project sub-team to help build original UBC Rapid projects. You'll also
                    have the chance to build and repair 3D printers and experiment with exotic materials.
                    <br /><br />
                    No experience is needed! We welcome students from every major and skill set.
                    Most of all, we're looking for dedicated people who want to learn and grow
                    with the team.
                </p>
                <br />
                {!siteConfig.applicationsOpen && (
                    <p>Follow us on{' '}
                        <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
                        {' '}to stay updated on future applications!
                    </p>
                )}
                {siteConfig.applicationsOpen && (
                    <>
                        <p>To apply, fill out the application form below and answer all the required
                            questions. If you're selected for an interview, we'll email you to book a
                            time. Interviews take up to 30 minutes and are held on a rolling basis.
                            <br /><br />
                            We'll likely ask you to explain how an FDM 3D printer works and how to
                            3D print a part. Don't worry about getting everything right. We care more
                            about your effort and how you think through the questions.
                            <br /><br />
                        </p>
                        <br /><br />
                        <div className="info-btns-joinus">
                            <Button
                                className='btns'
                                buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                newTab='true'
                                link={siteConfig.links.applicationForm}
                            >
                                Application Form
                            </Button>
                        </div>
                        <br /><br />
                        <p>We look forward to meeting you!</p>
                    </>
                )}
                <br /><br />
            </div>
        </>
    );
}
