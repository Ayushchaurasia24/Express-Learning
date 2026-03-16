const express = require("express");
const router = express.Router();

router.get("/books", (req,res)=>{
    console.log("Fetching books....");
    res.send("Here is the list of books!");
});
router.post("/books", (req,res)=>{
    const book = req.body;
    console.log("recevied book data :", book);
    res.send("Book added");
});

module.exports = router;
