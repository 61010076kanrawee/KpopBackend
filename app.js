const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const gateways = require("./routes/kpop-profile/index");
const gateways_kpop_update = require("./routes/kpop_update/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.json({
    message: "Services is running",
  });
});

app.use("/kpop-profile", gateways);
 app.use("/kpop-update", gateways_kpop_update);

app.use("*", (req, res) => {
  res.sendStatus(404);
});

var port = process.env.PORT || 1323;
app.listen(port, () => console.log("App is RUNNING on PORT:" + port));
