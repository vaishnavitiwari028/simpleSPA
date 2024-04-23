const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);
app.get("/*", (req, res) => {
  res.sendFile(path.resolve("frontend", "index.html"));
});
app.listen(PORT, console.log(`server statrted at ${PORT}`));
