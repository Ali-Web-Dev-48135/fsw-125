


const StudentUpdateElement = (props) => {

    return(
        
        <div key={props.studentId + Math.random() * 100} className={props.className}>
            <p>{props.studentName}</p>
            <p>{props.studentAge}</p>
            <p>{props.studentGender}</p>
            <p>{props.studentMajor}</p>
            <p>{props.studentHobby}</p>
            <p>{props.studentPassing === true ? "True" : "False "}</p>
            <button onClick={() => {props.editStudentFunction(props.studentId)}}>Edit</button>
        </div>

    )
};

export default StudentUpdateElement;

