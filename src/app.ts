import express from "express";
import cors from "cors";
import config from "./configurations";
import databaseConfiguration from "./configurations/databaseConfiguration";
import requestLogger from "./utilities/requestLogger";

const app = express(); // Calling express function
const port = config.PORT || 5000; // Assigning a port

app.use(cors()); // Initializing Cross-Origin Resource Sharing
app.use(express.json()); // Parsing incoming JSON requests and puts the parsed data in req
app.use(requestLogger);

// GET request to homepage
app.get("/", (req, res) => {
  res.send("Welcome to PayMe app");
});

// Global 404 error handler
app.use((req, res) => res.status(404).send({
  status: "error",
  error: "Not found",
  message: "Route not correct kindly check url.",
}));

(async () => {
  console.log("Awaiting Database Connection");
  await databaseConfiguration.connectToMongo();
  app.listen(port || 4000, async () => {
    console.log(
      `PayMe API listening on ${port || 4000}`
    );
  });
})();

export default app;
