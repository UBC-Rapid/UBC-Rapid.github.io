import '../../App.css';
import TitleSection from '../TitleSection';
import CardItem from '../CardItem';
import './JoinUs.css';
import { Button } from '../Button';
import react from "react";

export default function JoinUs() {
    return (
        <>
            <h1 className='join-us'>JOIN US</h1>
            <div className='info_wrapper'>
                        <h4>We are recruiting members to work in our consulting and 3d printing sub-teams, as the demands for prototyping and 3d printing orders have increased over the years. Newer members will be attending our workshops to learn prototyping and 3d printing basics, while paired with a mentor to help with some requests and gain real professional experience with stakeholders.</h4>
                        <h4>Our new printer design sub-team is also making progress on the design and construction of a new compact 3d printer, which is still in early modelling stages. Once members gain adequate experience, they will also be welcome to contribute to that sub-team and be part of the construction of the first UBC Rapid original printer!</h4>
                        <h4>Additionally we are launching new software projects for Cura and Marlin to work on the development of open source software with millions of other users. Our new printer will also likely need some firmware adjustments forked from Marlin.</h4>
                        <h4>By joining UBC Rapid, you will go through an intensive workshop on 3D printing, be paired with an experienced mentor to work on real projects, get the chance to build and repair your own 3D printer, and experience printing with exotic materials. Regardless of experience level, we are looking for dedicated individuals willing to put in the time and effort to learn.</h4>
                        <h3>The application deadline is September 17th 2021.</h3>
                        <h4>Linked below is the application form for UBC Rapid. Please answer all the required questions. If selected for an interview, you will receive an email during the application time frame to book an interview. The interview is expected to take up to 30 minutes. Interviews will be on a rolling basis, the last day to submit an application is September 17th 2021. You will likely be asked to describe the functioning of an FDM 3D printer at a basic level, as well as the process to 3D print a part. We care less about the correctness of the answers, and more about the effort and critical thinking of the responses.</h4>
                        <a href="https://docs.google.com/forms/d/1vI3_x4qAs0IlqLz8rUABv2z_WNvAZ3xuf_NvAqvzGNU/closedform" nclick="window.open(this.href); return false;" target="_blank"><h3>UBC Rapid application form</h3></a>
                        <h4>We are considering a wide array of skill sets, such as people from various majors with artistic skill or business/accounting skills. The most important thing we are looking for are dedicated people that will grow with the team. </h4>
                        <h4>We look forward to meeting you!</h4>
            </div>
        </>
    );
}