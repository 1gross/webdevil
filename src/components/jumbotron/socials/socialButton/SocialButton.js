import React from 'react';
import classes from './SocialButton.module.scss';

const SocialButton = ({item, small}) => {
    return (
        <a href={item.link} className={`${classes.social} ${classes[item.class]} ${small ? classes.small : ''}`} rel="noreferrer" target="_blank"></a>
    );
};

export default SocialButton;
