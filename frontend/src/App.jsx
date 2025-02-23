import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ZenMark from './ZenMark';
import Help from './Help';


function App() {

    return (

      <>
      <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/help">Help</a>
                </li> 
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Router>
        <div>
          <Routes>
            <Route path="/" element={<ZenMark />}></Route>
            <Route path="/help" element={<Help />}></Route>
          </Routes>
        </div>
      </Router>
      </>
    );
}

export default App
