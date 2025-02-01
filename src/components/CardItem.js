import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
    const { path, text, subtext, images, scrollPos = 0 } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hovering, setHovering] = useState(false);

    const handleCardClick = () => {
        window.scrollTo({ top: scrollPos, behavior: 'smooth' });
    };

    useEffect(() => {
        let interval;
        if (hovering) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 2000);
        } else {
            setCurrentIndex(0);
        }

        return () => clearInterval(interval);
    }, [hovering, images.length]);
    return (
        <li className='cards__item'>
            <Link className='cards__item__link' to={path} onClick={handleCardClick}>
                <figure className='cards__item__pic-wrap'
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}>
                    <img 
                        src={images[currentIndex]} 
                        alt="Rapid"
                        className='cards__item__img' 
                    />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{text}</h5>
                    <p className="cards_item_subtext">{subtext}</p>
                </div>
            </Link>
        </li>
    );
}

export default CardItem;
