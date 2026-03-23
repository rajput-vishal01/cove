import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./lib/db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/auth.route.js";

dotenv.config();
dbConnect();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/", userRouter);

app.listen(PORT, () => {
  console.log(`cove backend is live on ${PORT}`);
});
