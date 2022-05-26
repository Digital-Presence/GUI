import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AddClass from './addClass';
import Router from './routes';

function App() {
  return (
    <React.StrictMode>

      <BrowserRouter>
        <Router />
        <AddClass />

      </BrowserRouter>
    </React.StrictMode>

  );
}

export default App;
