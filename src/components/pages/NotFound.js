import React from 'react';
import '../../App.css';
import './NotFound.css';
import { Button } from '../Button';

export default function NotFound() {
    return (
        <div className='not-found'>
            <img
                src='/images/404.png'
                className='not-found-graphic'
                alt='404: a 3D printer nozzle partway through printing the number 404'
            />
            <h1>Page not found</h1>
            <p>This page hasn't finished printing. It may have moved, or the link might be wrong.</p>
            <Button buttonStyle='btn--primary' buttonSize='btn--medium' link='/'>
                Back home
            </Button>
        </div>
    );
}
