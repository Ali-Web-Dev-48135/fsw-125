
import StudentHomeContainer from '../StudentUI/StudentHomeContainer';
import StudentGetAllLink from '../StudentLogic/StudentGetAllLink';
import StudentAddLink from '../StudentLogic/StudentAddLink';
import StudentUpdateLink from '../StudentLogic/StudentUpdateLink';
import StudentDeleteLink from '../StudentLogic/StudentDeleteLink';


const StudentHome = (props) => {

    return(
        <>
            <StudentHomeContainer>
                <StudentGetAllLink></StudentGetAllLink>
                <StudentAddLink></StudentAddLink>
                <StudentUpdateLink></StudentUpdateLink>
                <StudentDeleteLink></StudentDeleteLink>
            </StudentHomeContainer>
        
        </>
    )
};

export default StudentHome;