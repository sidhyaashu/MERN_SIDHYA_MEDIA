/**IMPORTS */
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import mongoose from "mongoose";



/** Configaration */
dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT;


/**Middleware */
app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());