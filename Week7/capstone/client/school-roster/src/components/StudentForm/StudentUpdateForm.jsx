import { useState } from "react";
import classes from '../StudentStyles/StudentUpdateForm.module.css';


const StudentUpdateForm = (props) => {

    const [studentName, setStudentName] = useState(props.studentName);
    const [studentMajor, setStudentMajor] = useState(props.studentMajor);
    const [studentHobby, setStudentHobby] = useState(props.studentHobby);
    const [studentPassing, setStudentPassing] = useState(props.studentPassing);



    const setStudentNameHandler = (event) => {
        
        setStudentName(event.target.value);
        console.log(studentName);
    };

    const setStudentMajorHandler = (event) => {
        setStudentMajor(event.target.value);
    };

    
    const setStudentHobbyHandler = (event) => {
        setStudentHobby(event.target.value);
    }

    const setStudentPassingHandler = (event) => {
        setStudentPassing(event.target.value);
    };

    const submitTheUpdateHandler = (event) => {
        
        event.preventDefault();
        const updatedStudentData = {
            studentName,
            studentMajor,
            studentHobby,
            studentPassing
        };
        console.log(updatedStudentData);

        props.updateStudent(updatedStudentData, props.studentId);
        console.log("Student Info Sent");
    };


    return(
        <form className={classes['update-form']}>
            <div>
                <label htmlFor="studentName">Name</label>
                <input value={studentName}  id="studentName" text="text" onChange={setStudentNameHandler}/>
            </div>
            <div>
                <label htmlFor="studentHobby">Hobby</label>
                <input id="studentHobby" value={studentHobby} text="text" onChange={setStudentHobbyHandler}/>
            </div>
            <div>
                <label htmlFor="studentMajor">Major</label>
                <input value={studentMajor} id="studentMajor" type="text" onChange={setStudentMajorHandler}/>
            </div>
            <div>
                <label htmlFor="studentPassing">Passing</label>
                <input value={studentPassing} id="studentPassing" type="text" onChange={setStudentPassingHandler}/>
            </div>
            <button onClick={submitTheUpdateHandler}>Submit Edit</button>
            <button onClick={() => props.editStudentFunction(props.studentId)}>Cancel</button>
        </form>
    )
};

export default StudentUpdateForm;