import express from "express";
import {middlewares, responseHandler} from "./middlewares";
import routerApi from "./routes";

const app = express();

app.use(middlewares);

routerApi(app);

// app.use(responseHandler);


// app.use('/api-docs', swaggerUi.setup(swaggerDocument));
export default app;



// console.log('Docs in /api-docs')