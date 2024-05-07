const express = require("express");
const path = require("path");
const http = require("http");
const { default: mongoose } = require("mongoose");
const allRoutes = require("./router/router");

module.exports = class Application {
  #app = express();
  #DB_URL;
  #PORT;

  constructor(port, db_url) {
    this.#PORT = port;
    this.#DB_URL = db_url;
    this.configApplication();
    this.createServer();
    this.createRoutes();
    this.connectToMongoDb();
    this.errorHandeling();
  }

  configApplication() {
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(express.static(path.join(__dirname, "..", "public")));
  }

  createServer() {
    http.createServer(this.#app).listen(this.#PORT, () => {
      console.log("connent to the server! http://localhost:" + this.#PORT);
    });
  }

  async connectToMongoDb() {
    await mongoose
      .connect(this.#DB_URL)
      .then((res) => console.log("success connect to databse"))
      .catch((err) => console.log("faild connect to databse"));
  }

  createRoutes() {
    this.#app.use(allRoutes);
  }

  errorHandeling() {
    this.#app.use((req, res, next) => {
      return res.status(404).json({
        statusCode: 404,
        message: "The route is NotFound",
      });
    });

    this.#app.use((error, req, res, next) => {
      const statusCode = error?.status || 500;
      const message = error?.message || "internalServerError";
      return res.status(statusCode).json({
        statusCode,
        message,
      });
    });
  }
};
