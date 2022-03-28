import express from "express";
import cors from "cors";
import morgan from "morgan";
import headers from "./headers";

const middleWares = express();

middleWares.use(headers);
middleWares.use(cors());
middleWares.use(morgan("dev"));
middleWares.use(express.urlencoded({ extended: false }));
middleWares.use(express.json());

export default middleWares;
