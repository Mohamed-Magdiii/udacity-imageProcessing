import express from "express";
import addRoutes from "./routes/index";
const app: express.Application = express();
const port = 3000; // Default port

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("API RUNNING");
});

addRoutes(app);

// Start server
app.listen(port, () => {
  console.log("Api Running on localhost: " + port);
});

export default app;
