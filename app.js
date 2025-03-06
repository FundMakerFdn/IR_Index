const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/index");

// Middlewares
app.use(bodyParser.json());
app.use("/api", routes);

// Server Configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
