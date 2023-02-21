import React from 'react';
import classes from './Gross.module.scss'

import grossLink from '@images/gross-new.png';

const Gross = () => {
    return (
        <div className={classes.grossBlock}>
            <img src={grossLink} alt=""/>
        </div>
    );
};

export default Gross;
