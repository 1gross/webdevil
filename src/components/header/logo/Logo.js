import React from 'react';

const Logo = ({dark}) => {
    return (
        <a href="/" className={`${'logo'} ${dark ? 'dark' : ''}`}>
            web <span className="c-orange">[devil]</span>
        </a>
    );
};

export default Logo;
