
import classes from '../StudentStyles/StudentHomeContainer.module.css';


const StudentHomeContainer = (props) => {

    return(
        <div className={classes['link-container']}>{props.children}</div>
    )

};

export default StudentHomeContainer;