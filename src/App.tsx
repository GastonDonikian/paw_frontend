import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Pages/Authentication/Login'
import Navbar from'./Navbar'
import './App.css';
import Verify from "./Pages/Authentication/verify";
import Home from "./Pages/Home";
import MainBackground from './components/mainBackground';
import RegisterStudent from "./Pages/Authentication/RegisterStudent";

function App() {
  return (
      <div>
        <Navbar/>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Routes>
                <Route path="/registerStudent" element={<RegisterStudent/>}/>
            </Routes>
            <Routes>
                <Route path="/verify" element={<Verify/>}/>
            </Routes>
      </Router>
      <MainBackground />
      </div>
  );
}

export default App;
