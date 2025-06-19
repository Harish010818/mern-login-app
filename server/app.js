import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRout from "./routs/userRoute.js";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use(bodyParser.urlencoded({extended : true}));

app.use(cookieParser());

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

app.use("/api/user", userRout);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listen at port ${PORT}`);
})
