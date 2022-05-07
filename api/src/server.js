import express from "express";
import { middleWares } from "./middlewares/index";
import { logErrors, errorHandler, boomErrorHandler, ormErrorHandler} from './middlewares/errorHandler/errorHandlers'
import next from './middlewares/errorHandler'
import routerApi from "./routes";

const app = express();

app.use(middleWares);

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);
app.use(next.success)

// app.use('/api-docs', swaggerUi.setup(swaggerDocument));
export default app;



// console.log('Docs in /api-docs')