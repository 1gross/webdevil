import React from 'react';
import SocialButton from "./socialButton/SocialButton";
import classes from './SocialList.module.scss';

const SocialList = ({className, small}) => {
    const socials = [{class: 'instagram', link: '/'}, {class: 'telegram', link: '/'}];

    return (
        <div className={`${classes.socialNetworks}  ${className}`}>
            {
                socials.map((item, index) =>
                    <SocialButton key={index + 1} item={item} small={small} />)
            }
        </div>
    );
};

export default SocialList;
