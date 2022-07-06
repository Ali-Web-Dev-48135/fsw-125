const {v4: uuidv4} = require("uuid");

const studentData = [
    {
        studentName: "John Doe",
        studentAge: 20,
        studentGender: "Male",
        studentMajor: "CS",
        studentHobby: "Football",
        studentPassing: true,
        isEditing: false,
        studentId: uuidv4(),
    },
    {
        studentName: "Jane Doe",
        studentAge: 22,
        studentGender: "Female",
        studentMajor: "CS",
        studentHobby: "Tennis",
        studentPassing: false,
        isEditing: false,
        studentId: uuidv4(),
    },
    {
        studentName: "John Smith",
        studentAge: 20,
        studentGender: "Male",
        studentMajor: "Health",
        studentHobby: "Basketball",
        studentPassing: false,
        isEditing: false,
        studentId: uuidv4(),
    },
    {
        studentName: "Jane Smith",
        studentAge: 20,
        studentGender: "Female",
        studentMajor: "Science",
        studentHobby: "Soccer",
        studentPassing: true,
        isEditing: false,
        studentId: uuidv4(),
    },
    {
        studentName: "Ashley Smith",
        studentAge: 24,
        studentGender: "Female",
        studentMajor: "CS",
        studentHobby: "Football",
        studentPassing: false,
        isEditing: false,
        studentId: uuidv4(),
    },

];

module.exports = studentData;

