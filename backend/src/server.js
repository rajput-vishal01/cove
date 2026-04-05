import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./lib/db.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/auth.route.js";
import cors from "cors"
dotenv.config();
dbConnect();

const app = express();


const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);


app.use("/api/v1/", userRouter);

app.listen(PORT, () => {
  console.log(`cove backend is live on ${PORT}`);
});
