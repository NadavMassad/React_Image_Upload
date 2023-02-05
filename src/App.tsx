import React from 'react';
import logo from './logo.svg';
import { Gallery } from './features/gallery/Gallery';
import './App.css';
import Upload from './features/gallery/Upload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome To My Gallery
        <Upload/><br/>
        <Gallery/>
      </header>
    </div>
  );
}

export default App;
