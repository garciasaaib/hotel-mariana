import express from "express";
import middleWares from "./middlewares";
import routes from "./routes";

const app = express();

app.use(middleWares);

app.use('/api', routes);

export default app;
