const express = require("express");
const mongoose = require("mongoose");

// const dbURI = "mongodb+srv://admin:1234@cluster0.soae1vo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// mongoose.connect(dbURI, {}).
//     then((resp) => {
//         console.log("connected!")
//     }).catch((err) => {
//         console.log(err)
//     })
// express app
const app = express();

// middleware
app.use(express.static("public"));

// register view engine
app.set("view engine", "ejs");

// listen for requests
app.listen(3000);

app.get("/",(req,res) => {
    res.render("index", {title: "Home", blogs: [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ]})
})

app.get("/about",(req,res) => {
    res.render("about",{title: "About"})
})

app.get("/blogs/create",(req,res) => {
    res.render("create", {title: "Create Blog"});
})

app.use((req,res) => {
    res.status(404).render("404", {title: "404"})
})