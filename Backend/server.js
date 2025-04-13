const express = require("express");
const app = express();
const cors = require("cors");
const loginRoute = require("./routes/LoginRoute");
app.use(cors());
app.use(express.json());
app.use("/checkUser", loginRoute);
app.get("/", (req, res) => {
  res.status(200).json({ message: "hello there" });
});
app.listen(5000, () => {
  console.log(`Backend listning at port 5000`);
});
