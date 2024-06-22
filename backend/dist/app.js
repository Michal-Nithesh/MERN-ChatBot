import express from 'express';
import { config } from 'dotenv';
import mrogan from 'morgan';
config();
const app = express();
// middleware
app.use(express.json());
//remove it in production
app.use(mrogan("dev"));
app.use("/api/v1");
export default app;
//# sourceMappingURL=app.js.map