let express = require("express");
let app = express();
let path = require("path");

let public = path.join(__dirname, 'public');
let port = 4010;

app.use("/", express.static(public));

app.listen(port, (err, res) => {
	if(err) {
		console.log("Error: " + err)
	}

	console.log("Server running on port: " + port);
});