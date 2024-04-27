const express = require("express");
const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("./middlewares/cors");

app.use(
  cors,
  bodyParser.json(),
  express.static(path.join(__dirname, "public")),
  mainRoute,
  gamesRouter
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
