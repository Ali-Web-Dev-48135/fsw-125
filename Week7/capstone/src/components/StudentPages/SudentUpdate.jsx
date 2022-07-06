
import StudentUpdateElement from '../StudentLogic/StudentUpdateElement';
import StudentUpdateForm from '../StudentForm/StudentUpdateForm';
import classes from '../StudentStyles/StudentUpdateElement.module.css';
import StudentHomeContainer from '../StudentUI/StudentHomeContainer';
import StudentHomeLink from '../StudentLogic/StudentHomeLink';
import StudentAddLink from '../StudentLogic/StudentAddLink';
import StudentDeleteLink from '../StudentLogic/StudentDeleteLink';


const StudentUpdate = ({studentList, editStudent, updateStudent}) => {



    const studentArray = [...studentList];




    return(
        <div className={classes['student-update__container']}>
        <StudentHomeContainer>
                <StudentHomeLink></StudentHomeLink>
                <StudentAddLink></StudentAddLink>
                <StudentDeleteLink></StudentDeleteLink>
        </StudentHomeContainer>
        <h3>Update Student</h3>
        {

            studentArray.map( (element) => {
                return(
                        !element.isEditing ?
                        
                        <StudentUpdateElement
                            studentName={element.studentName}
                            studentAge={element.studentAge}
                            studentGender={element.studentGender}
                            studentMajor={element.studentMajor}
                            studentHobby={element.studentHobby}
                            studentPassing={element.studentPassing}
                            studentId={element.studentId}
                            editStudentFunction = {editStudent}
                            className={classes['student-update__element']}
                            />

                    :
                    <StudentUpdateForm 
                    studentName={element.studentName}
                    studentMajor={element.studentMajor}
                    studentHobby={element.studentHobby}
                    studentPassing={element.studentPassing}
                    studentId={element.studentId}
                    editStudentFunction={editStudent}
                    updateStudent={updateStudent}
                    />
                )
            })
        }   
        </div>
    )
};

export default StudentUpdate;