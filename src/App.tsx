import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Pages/Authentication/Login'
import StudentProfile from './Pages/Profiles/StudentProfile';
import Navbar from'./Navbar'
import './App.css';
import Verify from "./Pages/Authentication/verify";
import Register from './Pages/Register';
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
            <Routes>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            <Routes>
                <Route path="/studentProfile" element={<StudentProfile/>}/>
            </Routes>
            
      </Router>
      <MainBackground />
      </div>
  );
}

export default App;
