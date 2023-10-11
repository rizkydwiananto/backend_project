const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const config = require("./config");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(routes);

app.listen(config.PORT, () => {
  console.log("Server Running on port " + config.PORT);
});
