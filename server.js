const express = require("express");

const app = express();

const bookRouter = require('./routes/books');

app.use(express.json());

app.use("/", bookRouter);

app.listen(3000, ()=>{
    console.log("server runing http://localhost:3000");
})
