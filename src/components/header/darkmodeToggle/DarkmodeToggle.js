import React from 'react';
import classes from './DarkmodeToggle.module.scss'
import {useLightMode} from '@hooks/useLightMode';

const DarkmodeToggle = () => {
    const [theme, setLightTheme] = useLightMode();

    return (
        <button className={`${'btn-simple'} ${classes.themeToggle} ${theme ? classes.light : ''}`} onClick={() => setLightTheme(!theme)}></button>
    );
};

export default DarkmodeToggle;
