
import classes from '../StudentStyles/StudentAdd.module.css';
import StudentForm from '../StudentForm/StudentForm';
import StudentHomeContainer from '../StudentUI/StudentHomeContainer';
import StudentHomeLink from '../StudentLogic/StudentHomeLink';
import StudentGetAllLink from '../StudentLogic/StudentGetAllLink';
import StudentDeleteLink from '../StudentLogic/StudentDeleteLink';
import StudentUpdateLink from '../StudentLogic/StudentUpdateLink';

const StudentAdd = ({addStudentFunction}) => {

    

    const addStudentFunctionHandler = (newStudentObject) => {
        addStudentFunction(newStudentObject);

    };


    return(
        <>
            <StudentHomeContainer>
                <StudentHomeLink></StudentHomeLink>
                <StudentGetAllLink></StudentGetAllLink>
                <StudentUpdateLink></StudentUpdateLink>
                <StudentDeleteLink></StudentDeleteLink>
            </StudentHomeContainer>
            <h4 className={classes['main-header']}>Create A Student</h4>
            <StudentForm addStudentFunction={addStudentFunctionHandler}/>
        </>
    
        )
};

export default StudentAdd;