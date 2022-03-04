import express from "express";
import cors from "cors";
import morgan from "morgan";
import swagger from "./swagger";
import headers from "./headers";

const middleWares = express();

middleWares.use(headers);
middleWares.use(cors());
middleWares.use(morgan("dev"));
middleWares.use(swagger);
middleWares.use(express.urlencoded({ extended: true, limit: "50mb" }));
middleWares.use(express.json({ limit: "50mb" }));

export default middleWares;
