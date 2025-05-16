import React from 'react';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <button
            onClick={toggleDarkMode}
            className="btn btn-outline-primary"
            aria-label="Toggle dark mode"
        >
            {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;
