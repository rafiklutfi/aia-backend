const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const router = require("./routes");
app.use(router);

app.listen(port, () => {
  console.log(`Server already run at port: ${port}`);
});
