import express from "express";
import cors from "cors";
// import "./loadEnvironment.mjs";
// import records from "./routes/record.mjs";
import dotenv from "dotenv";
import db from "./db/conn.js";

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

db();

// app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
