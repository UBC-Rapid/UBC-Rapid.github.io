import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium'];

export const Button = ({
    children,
    type,
    buttonStyle, 
    buttonSize,
    newTab,
    link
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize
    : SIZES[0];

    const routeToPage = (newTab, link) => {
        if (newTab == 'true') {
            window.open(link, '_blank', 'noopener, noreferrer');
        } else {
            window.open(link, '_self');
        }
      };

    return (
        <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={() => routeToPage(newTab, link)}
            type={type}
        >
            {children}
        </button>
    )
};
