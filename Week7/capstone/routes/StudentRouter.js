const express = require("express");
const student_router = express.Router();
// const bodyparser = require("body-parser");
const {v4: uuidv4} = require("uuid");
const STUDENT_DATA = require("../data/StudentStaticData");



student_router

    .get("/", (request, response) => {
        console.log("Requested Get All Route");
        response.status(200).send(STUDENT_DATA);

    })

    .get("/:studentId", (request, response, next) => {
        const STUDENT_ID = request.params.studentId;
        const STUDENT_OBJECT = STUDENT_DATA.find(element => element.studentId === STUDENT_ID);
        if(!STUDENT_OBJECT)
        {
            const error = new Error("Student ID not found.");
            return next(error);
        }
        const STUDENT_JSON  = JSON.stringify(STUDENT_OBJECT);
        response.status(200).send(`Student Found ${STUDENT_JSON}`);

    })

    .post("/", (request, response) => {
        const NEW_STUDENT = request.body;
        NEW_STUDENT.isEditing = false;
        NEW_STUDENT.studentId = uuidv4();
        STUDENT_DATA.push(NEW_STUDENT);
        response.status(201).send(STUDENT_DATA);
    })

    .delete("/:studentId", (request, response) => {
        const STUDENT_ID = request.params.studentId;
        const STUDENT_INDEX = STUDENT_DATA.findIndex(element => element.studentId === STUDENT_ID);
        STUDENT_DATA.splice(STUDENT_INDEX, 1);
        response.send("Student Deleted From Roster.");
    })

    .put("/:studentId", (request, response) => {
        const STUDENT_ID = request.params.studentId;
        const STUDENT_INDEX = STUDENT_DATA.findIndex(element => element.studentId === STUDENT_ID);
        console.log(request.body);
        Object.assign(STUDENT_DATA[STUDENT_INDEX], request.body);
        response.status(201).send(STUDENT_DATA);

    });



module.exports = student_router;