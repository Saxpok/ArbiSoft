
import React from 'react'
import './App.css'
import MainRoute from './modules/Routes/MainRoute';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
