const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config(); //adding env

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //middleware for express, body parser
app.use(cors());

const router = require("./routes"); //for GET file from routes, (IMPORT)
app.use(router); //use Router

app.listen(port, () => {
  console.log(`Server already run at port: ${port}`);
});
