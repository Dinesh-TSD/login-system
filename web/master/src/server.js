const express = require ('express');
const mysql = require ('mysql');
const app = express();


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "website"

});

db.connect((err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("Success...");
    }
})



app.get("/", (req, res) =>{
    res.send("<h1>Hello Dinesh</h1>");
});

app.listen(5000, () => {
    console.log("Listening...");
});
 