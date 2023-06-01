import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import maincatg from "./routes/maincatgroutes.js";
import subcatg from "./routes/subcatgroutes.js";
import product from "./routes/productroutes.js";

// To config dotenv files
dotenv.config();

// initializing express app
const app = express();

// Middleware to parse incomming request
app.use(express.json());

//middleware to log http request
app.use(morgan("common"));

//to enable cors
// in localhost
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

//enable routing
app.use("/api/maincatg", maincatg);
app.use("/api/subcatg", subcatg);

app.use("/api/product", product);

//db connect & starting the server
mongoose
  .connect(process.env.MONGO_URL, {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(3001, () => {
      console.log("server is starting...");
    });
  })
  .catch((er) => {
    console.log(er);
  });
