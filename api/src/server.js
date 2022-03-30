import express from "express";
import middleWares from "./middlewares";
import routes from "./routes";
import routerApi from "./routes";
const app = express();

app.use(middleWares);

// app.use('/api/v1', routes);
routerApi(app);

// app.use('/api-docs', swaggerUi.setup(swaggerDocument));
export default app;



// console.log('Docs in /api-docs')