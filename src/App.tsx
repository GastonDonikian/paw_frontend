import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Pages/Authentication/Login'
import Navbar from'./Navbar'
import './App.css';
import Verify from "./Pages/Authentication/verify";

function App() {
  return (
      <div>
        <Navbar/>
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Routes>
                <Route path="/verify" element={<Verify/>}/>
            </Routes>
      </Router>
      </div>
  );
}

export default App;
