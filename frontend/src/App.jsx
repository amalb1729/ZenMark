import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ZenMark from './ZenMark';
import Help from './Help';
import FileOpener from './components/FileOpener/FileOpener';
import DownloadButton from './components/DownloadButton/DownloadButton';

function App() {
    const [markdown, setMarkdown] = useState('');

    const handleFileLoad = (content) => {
        setMarkdown(content);
    };

    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/help">Help</a>
                            </li>
                        </ul>
                        <div className="d-flex gap-2">
                            <FileOpener onFileLoad={handleFileLoad} />
                            <DownloadButton markdown={markdown} />
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ZenMark setParentMarkdown={setMarkdown} markdown={markdown} />}></Route>
                    <Route path="/help" element={<Help />}></Route>
                </Routes>
            </div>
        </Router>
        </>
    );
}

export default App;
