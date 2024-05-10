const express = require("express");
const path = require("path");
const http = require("http");
const { default: mongoose } = require("mongoose");
const allRoutes = require("./router/router");
const morgan = require("morgan");
const createHttpError = require("http-errors");

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
    this.#app.use(morgan("dev"));
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
      .then((res) => console.log("connected to databse"))
      .catch((err) => console.log(err.message));

    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      process.exit(0);
    });

    mongoose.connection.on("connected", () => {
      console.log("connected");
    });

    mongoose.connection.on("disconnected", () => {
      console.log("close the connection!");
    });
  }

  createRoutes() {
    this.#app.use(allRoutes);
  }

  errorHandeling() {
    this.#app.use((req, res, next) => {
      next(createHttpError.NotFound("آدرس موردنظر یافت نشد"));
    });

    this.#app.use((error, req, res, next) => {
      const serverError = createHttpError.InternalServerError();
      const statusCode = error?.status || serverError.status;
      const message = error?.message || serverError;

      return res.status(statusCode).json({
        data: null,
        errors: {
          statusCode,
          message,
        },
      });
    });
  }
};
