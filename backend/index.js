const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const patients = require("./routes/patients");
const auth = require("./routes/auth");

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/patients", patients);
app.use("/auth", auth);

app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
