
import { useState , useEffect} from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import StudentHeader from './components/StudentUI/StudentHeader';
import StudentMain from './components/StudentUI/StudentMain';
import StudentFooter from './components/StudentUI/StudentFooter';
import StudentHome from './components/StudentPages/StudentHome';
import StudentGetAll from './components/StudentPages/StudentGetAll';
import StudentAdd from './components/StudentPages/StudentAdd';
import StudentUpdate from './components/StudentPages/SudentUpdate';
import StudentDelete from './components/StudentPages/StudentDelete';
import axios from 'axios';
import './App.css';



const App = () =>  {

  const [studentsArray, setStudentsArray] = useState([]);

  const allStudents = () => {
    console.log("All Students Ran");
    axios.get("/students")
    .then( (response) => setStudentsArray(response.data))
    .catch(error => console.log(error))
  };

  const addStudent =(studentToAdd) => {
    
    axios.post("/students", studentToAdd)
      .then(response => {setStudentsArray( response.data) } )
      .catch( (error) => console.log(error))
  };

  const deleteStudent = (studentId) => {
    axios.delete(`/students/${studentId}`)
    .then(response => {
      setStudentsArray(oldArray => oldArray.filter(element => element.studentId !== studentId))
    })
    .catch(error => console.log(error))
  };




  const updateStudent = (updatedStudentData, studentId) => {
    console.log("Edit Student Ran");
    axios.put(`/students/${studentId}`, updatedStudentData)
    .then( response =>  { setStudentsArray(response.data) } )
    .catch(error => console.log(error))
  };

  const editStudent = (editStudentId) => {

    let temporaryStudentArray = [...studentsArray];
    console.log(temporaryStudentArray);
    let editToDoItem = temporaryStudentArray.findIndex(element => element.studentId === editStudentId);
    temporaryStudentArray[editToDoItem].isEditing = !temporaryStudentArray[editToDoItem].isEditing;
    setStudentsArray(temporaryStudentArray);
  };


  
  useEffect(() => {

    allStudents();
  }, [] );


  return (
    <>
    <StudentHeader/>
    <BrowserRouter>
        <StudentMain>
          <Routes>
            <Route exact path='/' element={<StudentHome/>}/>
            <Route path='getallstudents' 
              element={<StudentGetAll 
              studentList={studentsArray}/>}/>
            <Route path='/addstudent' 
                element={<StudentAdd addStudentFunction={addStudent}/>}/>
            <Route path='/updatestudent' 
                element={<StudentUpdate studentList={studentsArray} editStudent={editStudent} updateStudent={updateStudent}/>}/>
            <Route path='/deletestudent' element={<StudentDelete studentList={studentsArray} deleteStudentFunction={deleteStudent}/> }/>
            <Route/>
          </Routes>
        </StudentMain>
      </BrowserRouter>
      <StudentFooter/>
    </>
  );
}

export default App;
