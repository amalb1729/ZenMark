import React from 'react';
import './Toolbar.css';

const Toolbar = ({ children }) => {
    return (
        <div className="toolbar">
            <div className="toolbar-content">
                {children}
            </div>
        </div>
    );
};

export default Toolbar; 