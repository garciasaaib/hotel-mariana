import express from "express";
import cors from "cors";
import morgan from "morgan";
import headers from "./headers";
import { logErrors, errorHandler, boomErrorHandler, ormErrorHandler} from './errorHandler'

const middleWares = express();
const responseHandler = express();

middleWares.use(headers);
middleWares.use(cors());
middleWares.use(morgan("dev"));
middleWares.use(express.urlencoded({ extended: false }));
middleWares.use(express.json());

// responseHandler.use(logErrors)
// middleWares.use(boomErrorHandler)
// middleWares.use(ormErrorHandler)
// middleWares.use(errorHandler)

exports.middleWares = middleWares
// exports.responseHandler = responseHandler(err, req, res, next) {
// next(err)
// }
// export default middleWares;

