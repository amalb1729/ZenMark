import React from 'react';
import './DownloadButton.css';

const DownloadButton = ({ markdown }) => {
    const saveMarkdown = () => {
        const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ZenNote.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <button className="download-button" onClick={saveMarkdown}>Download Markdown</button>
    );
};

export default DownloadButton; 