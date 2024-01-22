import React from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Navbar from './components/Navbar';
import Table from './pages/Table';
import Social from './pages/Social';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
    
        <Route path="/league-table" element={<Table/>}/>
         
        <Route path="/social" element={<Social/>}/>

    </Routes>
    </>
  );
}

export default App;
