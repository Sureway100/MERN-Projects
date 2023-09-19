import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
// import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware for parsing request body
app.use(express.json());
app.use(cors());

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 8080;
const DB = process.env.DB;

mongoose
  .connect(`${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

//
app.get("/", (req, res) => {
  console.log("get is called");
  return res.status(202).send("<h1> it is working <h1>");
});

//this route takes you to the route folder
app.use("/books", booksRoute);

//
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
