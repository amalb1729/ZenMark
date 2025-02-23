import React from 'react';
import './DownloadButton.css';

const DownloadButton = ({ onSave }) => {
    return (
        <button className="download-button" onClick={onSave}>Download Markdown</button>
    );
};

export default DownloadButton; 