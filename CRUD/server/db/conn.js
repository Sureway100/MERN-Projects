import mongoose from "mongoose";

//databases--------------------------------
const db = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/training", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
};
//end database.................................

export default db;

// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     const con = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       // useFindAndModify:false,
//       // useCreateIndex:true
//     });
//     console.log(`MongoDB connected: ${con.connection.host}`);
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

// db.records.insertOne({
//   Name: "David Sureway",
//   Position: "developer",
//   Level: "senoir",
//   date: Date(),
// });
// {
//   acknowledged: true,
//   insertedId: ObjectId("65085da3dcc566d296fa2dc2")
// }
