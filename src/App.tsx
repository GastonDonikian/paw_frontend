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
import Error500 from './Pages/Errors/Error500';
import Error404 from './Pages/Errors/Error404';
import Error403 from './Pages/Errors/Error403';


function App() {

  return (
      <div>
       {!isErrorRoute() && <Navbar />}
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
                <Route path="/error404" element={<Error404 />} />
                <Route path="/error403" element={<Error403 />} />
                <Route path="/error500" element={<Error500 />} />
            </Routes>
      </Router>
      
      {!isErrorRoute() && <MainBackground />}
      
      </div>
  );
}

function isErrorRoute() {
  const currentPath = window.location.pathname;

  const is404Error = currentPath === "/error404";
  const is403Error = currentPath === "/error403";
  const is500Error = currentPath === "/error500";

  return (is404Error || is500Error || is403Error);
}

export default App;
