const express = require("express");

const app = express();

const orderRouter = require('./routes/order');
const userRouter = require('./routes/users');

app.use("/orders" , orderRouter);

app.use("/users", userRouter);

app.listen(3000, ()=>{
    console.log("server runing http://localhost:3000");
})
