const express = require('express');
const app = express();

const path = require("path");

app.get("/api/products", (req,res) => {
    res.sendFile(path.join(__dirname, "VIEW", "products.html"));
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});