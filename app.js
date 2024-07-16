const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog")

const dbURI = "mongodb+srv://admin:1234@cluster0.soae1vo.mongodb.net/node-tutorial?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(dbURI, {}).
    then((resp) => {
        // listen for requests
        app.listen(3000);
    }).catch((err) => {
        console.log(err)
    });
// express app
const app = express();

// middleware
app.use(express.static("public"));

// register view engine
app.set("view engine", "ejs");

app.get("/",(req,res) => {
    res.redirect("/blogs");
})

// blogsroutes

app.get("/add-blogs",(req,res, next) => {
    const blog = new Blog({
        title: "new blog 3?",
        snippet: "Wow... about the blog",
        body: "Wowwww.... more about the blog"
    });

    blog.save().then((resp) => {console.log("Succesfully sent!")}).catch((err) => { console.log(err) });

    next();
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