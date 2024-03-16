require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT; //3000;
const router = require("./Routes/router");
const mongoose = require("mongoose");

app.use(cors()); // backend code is 5004 , frontend is on port 3000  so we need to enable CORS for them to communicate with each other
app.use(express.json()); // data from frontend will come in json form
app.use(router);

// db connection

mongoose.set("strictQuery", false);

// Define the database URL to connect to.P
const mongoDB =
  "mongodb+srv://arshad10x:arshad10x@cluster0.obe8sbe.mongodb.net/myDb";

//  Wait for database to connect, logging an error if there is a problem;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("Database connected");
}

//server start

app.listen(PORT, () => {
  console.log(`server started at PORT NO ${PORT}`);
});
