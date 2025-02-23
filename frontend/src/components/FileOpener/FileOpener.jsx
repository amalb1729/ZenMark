import React from 'react';
import { setCurrentFile } from '../../services/fileService';
import './FileOpener.css';

const FileOpener = ({ onFileLoad }) => {
    const handleFileOpen = (event) => {
        const file = event.target.files[0];
        if (file) {
            setCurrentFile(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                onFileLoad(e.target.result);
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="file-opener">
            <input
                type="file"
                accept=".md"
                onChange={handleFileOpen}
                id="file-input"
                className="file-input"
            />
            <label htmlFor="file-input" className="file-label">
                Open Markdown File
            </label>
        </div>
    );
};

export default FileOpener; 