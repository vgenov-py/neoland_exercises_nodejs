const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");

app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");

app.get("/api", async(req, res) => {
    const kuga = await fetch("http://localhost:4000");
    const data = await kuga.json();
    res.send(data);
});
app.get("/", async(req, res) => {
    const kuga = await fetch("http://localhost:4000");
    const data = await kuga.json();
    res.locals.courses = data;

    res.render("../public/index");
});

app.get("/cursos", async(req, res) => {
    const kuga = await fetch("http://localhost:4000");
    const data = await kuga.json();
    res.locals.courses = data;
    res.render("../public/course");
});

app.listen(3000, () => console.log("Listening on port 3000"));