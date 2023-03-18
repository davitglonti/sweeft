import './App.css';
import { useState,useEffect } from 'react';
import Home from './Pages/Home'
import FullPage from './Pages/FullPage';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';

function App() {
 
  return (
    <div className="App">

<Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/FullPage/:id" element={<FullPage/>}/>
    </Routes>
  
    </Router>
     
    </div>
  );
}

export default App;
