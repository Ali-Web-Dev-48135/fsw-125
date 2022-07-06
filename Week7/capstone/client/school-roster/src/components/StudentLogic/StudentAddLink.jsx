
import {Link} from 'react-router-dom';

const StudentAddLink = (props) => {

    return(
        <>
            <Link className={props.className} to="/addstudent">Create</Link>
        </>
    )
};

export default StudentAddLink;