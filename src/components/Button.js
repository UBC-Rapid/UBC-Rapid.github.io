import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium'];

export const Button = ({
    children,
    type,
    buttonStyle, 
    buttonSize,
    link
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize
    : SIZES[0];

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer');
      };

    return (
        <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={() => openInNewTab(link)}
            type={type}
        >
            {children}
        </button>
    )
};
