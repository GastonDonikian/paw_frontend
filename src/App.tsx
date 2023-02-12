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
import MyStudents from './Pages/MyStudents';
import MyLessons from './Pages/MyLessons';
import Class from './Pages/Class';

function App() {
  return (
      <div>
        <Navbar/>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/professors" element={<Contracts/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/registerStudent" element={<RegisterStudent/>}/>
                <Route path="/registerProfessor" element={<RegisterProfessor/>}/>
                <Route path="/verify" element={<Verify/>}/>
                <Route path="/profile" element={<StudentProfile/>}/>
                <Route path="/professorProfile/:id/" element={<ProfessorProfile/>}/>
                <Route path="/professorProfile" element={<ProfessorProfile/>}/>
                <Route path="/mySubjects" element={<MySubjects/>}/>
                <Route path="/editProfessorProfile" element={<EditProfessorProfile/>}/>
                <Route path="/editStudentProfile" element={<EditStudentProfile/>}/>
                <Route path="/newSubject" element={<NewSubject/>}/>
                <Route path="/addSubjects" element={<Subjects/>}/>
                <Route path="/newContract/:id/" element={<NewContract/>}/>
                <Route path="/myStudents" element={<MyStudents/>}/>
                <Route path="/myLessons" element={<MyLessons/>}/>
                <Route path="/class" element={<Class/>}/>
            </Routes>
      </Router>
      <MainBackground />
      </div>
  );
}

export default App;
