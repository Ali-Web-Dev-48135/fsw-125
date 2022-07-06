
import { useState } from "react";
import classes from '../StudentStyles/StudentForm.module.css';
import StudentButton from "../StudentUI/StudentButton";

const StudentForm = ({addStudentFunction}) => {


    const [studentName, setStudentName] = useState("");
    const [studentAge, setStudentAge] = useState("");
    const [studentGender, setStudentGender] = useState("");
    const [studentMajor, setStudentMajor] = useState("");
    const [studentHobby, setStudentHobby] = useState("");
    const [studentPassing, setStudentPassing] = useState("");

    const setStudentNameHandler = (event) => {
        
        setStudentName(event.target.value);
    };
    
    const setStudentAgeHandler = (event) => {
        setStudentAge(event.target.value);
    };

    const setStudentGenderHandler = (event) => {
        setStudentGender(event.target.value);
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


    const submitStudentDataHandler = (event) => {

        event.preventDefault();

        if( studentName.trim() === "" || studentAge.trim() === "" ||
            studentGender.trim() === "" || studentMajor.trim() === "" ||
             studentHobby.trim() === "" || studentPassing.trim() === ""
           )
           {
                alert("All Fields Must Be Filled.");
                return;
           }

        // assigning the object to pass up parent.
        const studentObject = {
            studentName,
            studentAge,
            studentGender,
            studentMajor,
            studentHobby,
            studentPassing: Boolean(studentPassing)
        };
        console.log(studentPassing);

        // Finalizing the submit logic.
        addStudentFunction(studentObject);
        setStudentName("");
        setStudentAge("");
        setStudentGender("");
        setStudentMajor("");
        setStudentHobby("");
        setStudentPassing("");

    };




    return (
        <form className={classes['main-form']} onSubmit={submitStudentDataHandler}>
            <div>
                <label htmlFor="studentName">Name</label>
                <input value={studentName}  id="studentName" type="text" onChange={setStudentNameHandler}/>
            </div>
            <div className={classes['main-form-age__div']}>
                <label htmlFor="studentAge">Age</label>
                <input value={studentAge} id="studentAge" type="number" min="18" onChange={setStudentAgeHandler}/>
            </div>
            <div>
                <label htmlFor="studentGender">Gender</label>
                <input id="studentGender" value={studentGender} type="text" onChange={setStudentGenderHandler}/>
            </div>
            <div>
                <label htmlFor="studentHobby">Hobby</label>
                <input id="studentHobby" value={studentHobby} type="text" onChange={setStudentHobbyHandler}/>
            </div>
            <div>
                <label htmlFor="studentMajor">Major</label>
                <input value={studentMajor} id="studentMajor" type="text" onChange={setStudentMajorHandler}/>
            </div>
            <div>
                <label htmlFor="studentPassing">Passing</label>
                <input value={studentPassing} id="studentPassing" type="text" onChange={setStudentPassingHandler}/>
            </div>
            <StudentButton>Submit Form</StudentButton>
        </form>
    )
};

export default StudentForm;