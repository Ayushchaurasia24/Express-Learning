const express = require('express');
const path = require("path");

const app = express();

app.use(express.json());

app.get("/api/products", (req,res) => {
    res.sendFile(path.join(__dirname, "VIEW", "products.html"));
});

app.post("/api/products", (req,res) =>{
    const product = req.body.productName;
    console.log("Prod recevied:", product);

    res.send(`Product ${product} added successfuly`);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});