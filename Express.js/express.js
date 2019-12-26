const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.send("Welcome To My Home Page");
});

app.get("/about", function (req, res) {
    res.send("Welcome To My About Page");
});


app.get("/Contactus", function (req, res) {
    res.send("Welcome To My Contact us page");
});


app.get("/calculator", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/calculator", function (req, res) {
    //res.send("thank u for your post");
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    switch (req.body.v3) {
        case '+':
            let sum = n1 + n2;
            res.send("The sum of two numbers is  " + sum);
        case '-':
            let difference = n1 - n2;
            res.send("The difference of two numbers is  " + difference);
        case '*':
            let multiply = n1 * n2;
            res.send("The multiplication of two numbers is  " + multiply);
        case '/':
            let devide = n1 / n2;
            res.send("The devide of two numbers is  " + devide);

    }

});

app.listen(3000, function (req, res) {
    console.log("Server is running");
});

