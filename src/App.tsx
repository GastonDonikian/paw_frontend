import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Pages/Authentication/Login'
import Navbar from'./Navbar'
import './App.css';

function App() {
  return (
      <div>
        <Navbar/>
        <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
          </Routes>
      </Router>
      </div>
  );
}

export default App;
