const express = require("express");
const app = express();
const PORT = 3000;

// Custom Middleware
function addUser(req, res, next) {
    req.user = "Guest";   
    next();
}

// Route using middleware
app.get("/welcome", addUser, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});



// console.log("INDEX FILE RUNNING");
// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.use((req,res,next)=>{
//     console.log("Authentication called");
//     next();
// });

// app.get("/", (req,res)=>{
//     res.send("<h1>Server is working</h1>");
// });

// app.get("/library-2", (req,res,next)=>{
//     console.log("Book recommendation");
//     next();
// }, (req,res)=>{
//     res.send("<h1>In Library-2</h1>");
// });

// app.get("/library-3", (req,res,next)=>{
//     console.log("For researcher only");
//     next();
// }, (req,res)=>{
//     res.send("<h1>In Library-3</h1>");
// });

// app.listen(PORT, ()=>{
//     console.log("Server running on port 3000");
// });