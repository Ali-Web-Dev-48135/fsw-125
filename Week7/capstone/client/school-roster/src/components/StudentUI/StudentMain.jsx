
import classes from '../StudentStyles/StudentMain.module.css';
import StudentHome from '../StudentPages/StudentHome';



const StudentMain = (props) => {

    return(
        <main className={classes['main-main']}>{props.children}</main>
    )
};

export default StudentMain;