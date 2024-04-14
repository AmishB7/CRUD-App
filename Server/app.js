import express from "express";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//create
app.post("/insert", (req, res) => {});
//read
app.get("/getAll", (req, res) => {
  console.log("Got All");
});

//update

//delete

app.listen(process.env.PORT, () => console.log("app is running"));
