const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const config = require("./config");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
	res.json({
		message: "Services is running",
	});
});

var port = process.env.PORT || 1323;
app.listen(port, () => console.log("App is RUNNING on PORT:" + port));