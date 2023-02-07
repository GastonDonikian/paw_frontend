import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './Pages/Authentication/Login'
import StudentProfile from './Pages/Profiles/StudentProfile';
import Navbar from'./Navbar'
import './App.css';
import Verify from "./Pages/Authentication/verify";
import Register from './Pages/Authentication/Register';
import Home from "./Pages/Home";
import MainBackground from './components/mainBackground';
import RegisterStudent from "./Pages/Authentication/RegisterStudent";
import RegisterProfessor from "./Pages/Authentication/RegisterProfessor";
import Logout from "./Pages/Authentication/Logout";
import ProfessorProfile from './Pages/Profiles/ProfessorProfile';
import Contracts from './Pages/Contracts';
import MySubjects from './Pages/MySubjects';
import EditProfessorProfile from './Pages/Profiles/EditProfessorProfile';
import EditStudentProfile from './Pages/Profiles/EditStudentProfile';
import NewSubject from './Pages/NewSubject';
import Subjects from './Pages/Subjects';
import NewContract from './Pages/NewContract';

function App() {
  return (
      <div>
        <Navbar/>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
            <Routes>
                <Route path="/professors" element={<Contracts/>}/>
            </Routes>
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Routes>
                <Route path="/logout" element={<Logout/>}/>
            </Routes>
            <Routes>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            <Routes>
                <Route path="/registerStudent" element={<RegisterStudent/>}/>
            </Routes>
            <Routes>
                <Route path="/registerProfessor" element={<RegisterProfessor/>}/>
            </Routes>
            <Routes>
                <Route path="/verify" element={<Verify/>}/>
            </Routes>
            <Routes>
                <Route path="/profile" element={<StudentProfile/>}/>
            </Routes>
            <Routes>
                <Route path="/professorProfile" element={<ProfessorProfile/>}/>
            </Routes>
            <Routes>
                <Route path="/mySubjects" element={<MySubjects/>}/>
            </Routes>
            <Routes>
                <Route path="/editProfessorProfile" element={<EditProfessorProfile/>}/>
            </Routes>
            <Routes>
                <Route path="/editStudentProfile" element={<EditStudentProfile/>}/>
            </Routes>
            <Routes>
                <Route path="/newSubject" element={<NewSubject/>}/>
            </Routes>
            <Routes>
                <Route path="/subjects" element={<Subjects/>}/>
            </Routes>
            <Routes>
                <Route path="/newContract" element={<NewContract/>}/>
            </Routes>
            
      </Router>
      <MainBackground />
      </div>
  );
}

export default App;
