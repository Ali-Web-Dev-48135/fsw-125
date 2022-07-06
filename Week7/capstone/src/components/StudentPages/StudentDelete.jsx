
import classes from '../StudentStyles/StudentDelete.module.css';
import StudentHomeContainer from '../StudentUI/StudentHomeContainer';
import StudentHomeLink from '../StudentLogic/StudentHomeLink';
import StudentAddLink from '../StudentLogic/StudentAddLink';
import StudentUpdateLink from '../StudentLogic/StudentUpdateLink';


const StudentDelete = ({studentList, deleteStudentFunction}) => {




    return (
        <div className={classes['student-delete__wrapper']}>
                <StudentHomeContainer>
                <StudentHomeLink></StudentHomeLink>
                <StudentAddLink></StudentAddLink>
                <StudentUpdateLink></StudentUpdateLink> 
            </StudentHomeContainer>
            <h4>Delete A Student</h4>
            {
                studentList.map( element => {
                    return(
                        <div className={classes['student-delete__container']}>
                            <p>{element.studentName}</p>
                            <p>{element.studentMajor}</p>
                            <p>{element.studentHobby}</p>
                            <p>{element.studentPassing}</p>
                            <button onClick={() => deleteStudentFunction(element.studentId)}>Delete</button>
                        </div>
                    )
                })

            }
        
        </div>
    )
    
};

export default StudentDelete;