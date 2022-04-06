import express from "express";
import cors from "cors";
import morgan from "morgan";
import headers from "./headers";
// import { logErrors, errorHandler, boomErrorHandler, ormErrorHandler} from './errorHandler'

const middleWares = express();
const responseHandler = express();

middleWares.use(headers);
middleWares.use(cors());
middleWares.use(morgan("dev"));
middleWares.use(express.urlencoded({ extended: false }));
middleWares.use(express.json());

// responseHandler.use(logErrors)
// responseHandler.use(errorHandler)
// responseHandler.use(boomErrorHandler)
// responseHandler.use(ormErrorHandler)

// export default {middleWares, responseHandler};
export default middleWares;

