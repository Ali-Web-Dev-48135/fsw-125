
import classes from '../StudentStyles/StudentHeader.module.css';


const StudentHeader = (props) => {

    return(
        <header className={classes['main-header']}>
            <h3>React Student Roster App</h3>
        </header>
    )
};

export default StudentHeader;