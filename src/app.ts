import express from "express";
import cors from "cors";

const app = express(); // Calling express function
const port = 5000; // Assigning a port

app.use(cors()); // Initializing Cross-Origin Resource Sharing
app.use(express.json()); // Parsing incoming JSON requests and puts the parsed data in req

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
  app.listen(port || 4000, async () => {
    console.log(
      `PayMe API listening on ${port || 4000}`
    );
  });
})();

process.on("unhandledRejection", (error: any) => {
  console.log("FATAL UNEXPECTED UNHANDLED REJECTION!", error.message);
  console.error("\n\n", error, "\n\n");
  //  throw error;
});

export default app;
