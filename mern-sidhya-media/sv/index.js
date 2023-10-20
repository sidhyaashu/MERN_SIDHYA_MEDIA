/**IMPORTS */
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cookieParser from "cookie-parser"

/** Import configaration */
import connectDB from "./database/dbConnection.js"
import authRouter from "./routes/AuthRoute/AuthR.js"

/** Configaration */
const app = express();
const PORT = process.env.SERVER_PORT;
connectDB();

/**Middleware */
app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended:false}))
app.use(cookieParser());



/**ROUTES */
app.use("/api/auth", authRouter);




/**MIDDLEWARE OF ERROR HANDLING */



/**CONNECTION */
mongoose.connection.once("open",()=>{
    app.listen(PORT,()=>console.log(`Server listening on ${PORT}`))
})