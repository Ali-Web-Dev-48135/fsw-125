
const StudentTableBody = ({ className, studentId, studentName, studentAge, studentBirthday, studentMajor, studentPassing}) => {

    return (
        <tr key={studentId} className={className}>
            <td>{studentName}</td>
            <td>{studentAge}</td>
            <td>{studentMajor}</td>
            <td>{studentPassing === true ? 'True' : 'False'}</td>
        </tr>
    )
};

export default StudentTableBody;