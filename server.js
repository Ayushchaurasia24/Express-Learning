const express = require("express");

const app = express();

app.use((req,res,next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

//Product
app.get("/products", (req,res) => {
    res.send("Here is the list of all products.");
});
app.post("/products", (req,res)=>{
    res.send("Here product added");
});

//Categories
app.get("/categories", (req,res)=>{
    res.send("Here is list of all categ");
});
app.post("/categories" , (req,res)=>{
    res.send("A new catg created");
});


app.listen(4000, ()=>{
    console.log("server runing http://localhost:4000");
})
