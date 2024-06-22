import express from 'express';
import { config } from 'dotenv';
import mrogan from 'morgan';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
config();
const app = express();

// middleware
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET))

//remove it in production
app.use(mrogan("dev"));

app.use("/api/v1", appRouter);

export default app;