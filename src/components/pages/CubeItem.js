import React from 'react';
import { Link } from 'react-router-dom';
import './CubeItem.css';

function CubeItem(props) {

    return (
        <>
            <div className='cube__item'>

                    <figure className='cube__item__pic-wrap' data-category={props.label}>
                        <img src={props.src} alt="Rapid"
                             className='cube__item__img'/>
                    </figure>
                    <div className='cube__item__info'>
                        <h5 className='cube__item__text'>{props.text}</h5>
                        <p className="cube_item_subtext">{props.subtext}</p>
                    </div>

            </div>
        </>
    );
}

export default CubeItem;
