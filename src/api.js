const courses = require("./courses.json");

const express = require("express");
const app = express();

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*"); // authorized headers for preflight requests
//     // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//     app.options("*", (req, res) => {
//         // allowed XHR methods
//         res.header(
//             "Access-Control-Allow-Methods",
//             "GET, PATCH, PUT, POST, DELETE, OPTIONS"
//         );
//         res.send();
//     });
// });

app.get("/", (req, res) => {
    // res.set(
    //     "Content-Security-Policy",
    //     "default-src 'http://localhost:4000/favicon.ico'"
    // );
    // res.set("Content-Security-Policy", "default-src 'http://localhost:4000'");
    // res.set("Content-Security-Policy", "default-src 'http://localhost:3000'");
    // res.header("Access-Control-Allow-Origin", "*");
    res.send(courses);
});

app.listen(4000, () => console.log("Listening to the API on port 4000"));