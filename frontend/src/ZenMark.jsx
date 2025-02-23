import React, { useEffect, useState } from 'react';
import {marked} from 'marked';
import Toolbar from './components/Toolbar/Toolbar';
import FileOpener from './components/FileOpener/FileOpener';
import DownloadButton from './components/DownloadButton/DownloadButton';
import './ZenMark.css';

const ZenMark = () => {
    const [markdown, setMarkdown] = useState('');

    const updatePreview = (event) => {
        setMarkdown(event.target.value);
    };

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

    const handleFileLoad = (content) => {
        setMarkdown(content);
    };

    useEffect(() => {
        const handleKeydown = (event) => {
            if (event.ctrlKey && event.key === 's') {
                event.preventDefault();
                saveMarkdown();
            }
        };

        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [markdown]);

    return (
        <>
            <Toolbar>
                <div className="toolbar-left">
                    <FileOpener onFileLoad={handleFileLoad} />
                </div>
                <div className="toolbar-right">
                    <DownloadButton onSave={saveMarkdown} />
                </div>
            </Toolbar>
            <div className="container">
                <textarea
                    id="editor"
                    placeholder="Start typing your Markdown here..."
                    onChange={updatePreview}
                    value={markdown}
                />
                <div
                    id="preview"
                    dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
                />
            </div>
        </>
    );
};

export default ZenMark;
