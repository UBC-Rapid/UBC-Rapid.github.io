import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out our services</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
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
                    <ul className='cards__items'>
                        <CardItem 
                            src='images/img-3.jpg'
                            text='Check our Printing Service'
                            label='3D Printing'
                            path='/printing'
                        />
                        <CardItem 
                            src='images/img-4.jpg'
                            text='Check our Printing Service'
                            label='3D Printing'
                            path='/printing'
                        />
                        <CardItem 
                            src='images/img-8.jpg'
                            text='Check our Printing Service'
                            label='3D Printing'
                            path='/printing'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
