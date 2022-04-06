import express from "express";
// import {middleWares, responseHandler} from "./middlewares";
import middleWares from "./middlewares";
import routerApi from "./routes";

const app = express();

app.use(middleWares);

routerApi(app);

// app.use(responseHandler);


// app.use('/api-docs', swaggerUi.setup(swaggerDocument));
export default app;



// console.log('Docs in /api-docs')