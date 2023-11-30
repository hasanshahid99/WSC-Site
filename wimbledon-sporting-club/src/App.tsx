import React from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Navbar from './components/Navbar';
import Table from './pages/Table';
import Shop from './pages/Shop';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<About/>}/>
    
        <Route path="/league-table" element={<Table/>}/>
         
        <Route path="/shop" element={<Shop/>}/>

    </Routes>
    </>
  );
}

export default App;
