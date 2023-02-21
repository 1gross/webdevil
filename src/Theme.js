import React, {useContext} from 'react';
import {ThemeContext} from "./context/ThemeContext";

const Theme = ({children}) => {
    const [lightTheme, setLightTheme] = useContext(ThemeContext);

    return (
        children
    );
};

export default Theme;
