import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import headers from "./headers";
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

// open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, '../docs'));

// ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const middleWares = express();

middleWares.use(headers);
middleWares.use(cors());
middleWares.use(morgan("dev"));
middleWares.use(connectLivereload());
middleWares.use(express.urlencoded({ extended: true, limit: "50mb" }));
middleWares.use(express.json({ limit: "50mb" }));

export default middleWares;
