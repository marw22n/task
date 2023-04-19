import express from 'express';
const app = express();

const students = [
    {
        id: 1,
        name: "Marwan",
        city: "shepin"
    },
    {
        id: 2,
        name: "Adel",
        city: "tanta"
    },{
        id: 3,
        name: "Mahmoud",
        city: "tala"
    },{
        id: 4,
        name: "Mazen",
        city: "menuf"
    },{
        id: 5,
        name: "Ahmed",
        city: "cairo"
    }

];

const studentsFunction = (request , response) => {
    let output = "<ul>";
    for (let i=0 ; i < students.length; i++){
        const student = students[i];
        output += "<li>" + student.name + "</li>";
    }
    output += "</ul>";
    response.send(output);
};
app.get("/students" , studentsFunction);



app.listen(5000);