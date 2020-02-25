import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkMode = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = event => {
        event.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Women's World Cup Players Ranked </h1>
            <div className="dark-mode__toggle">
                <div 
                onClick={toggleMode} 
                className={darkMode ? 'toggle toggled' : 'toggle'}
                data-testid="toggle-btn"
                />
            </div>
        </nav>
    );
};

export default DarkMode;