


import classes from '../StudentStyles/StudentGetAll.module.css';
import StudentTableBody from "../StudentLogic/StudentTableBody";
import StudentHomeContainer from "../StudentUI/StudentHomeContainer";
import StudentHomeLink from "../StudentLogic/StudentHomeLink";
import StudentAddLink from "../StudentLogic/StudentAddLink";
import StudentUpdateLink from "../StudentLogic/StudentUpdateLink";
import StudentDeleteLink from "../StudentLogic/StudentDeleteLink";

const StudentGetAll = ({studentList}) => {

    const studentArray = [...studentList];

    

    return(
        <div className={classes['all-students__wrapper']}>
            <StudentHomeContainer>
                <StudentHomeLink></StudentHomeLink>
                <StudentAddLink></StudentAddLink>
                <StudentUpdateLink></StudentUpdateLink>
                <StudentDeleteLink></StudentDeleteLink>
            </StudentHomeContainer>
            <h2 className={classes['all-main__header']}>All Your Students Enrolled</h2>
            <table className={classes['all-table']}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Major</th>
                        <th>Passing</th>
                    </tr>
                </thead>
                <tbody>
            {
                studentArray.map( (element) => {

                return (
                        <StudentTableBody
                            key={element.studentId} 
                            studentName={element.studentName} 
                            studentAge={element.studentAge}
                            studentMajor={element.studentMajor}
                            studentPassing={element.studentPassing}
                            />
                    )
                })
            }
            </tbody>
            </table>
        </div>
    )
};

export default StudentGetAll;