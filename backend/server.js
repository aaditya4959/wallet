const path = require("path");
const fs = require("fs");
const express = require("express");
const PORT = process.env.PORT || 3500;


const app = express();




app.listen(PORT, () => {
    console.log(`The application is running on port ${PORT}`);
})