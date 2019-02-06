let express = require("express");
let app = express();
let path = require("path");

let public = path.join(__dirname, 'public');
let port = 4010;

app.get("/", (req, res) => {
	res.sendFile(path.join(public, 'index.html'));
});

// app.use("/", express.static(__dirname + "public/index.html"));

app.listen(port, (err, res) => {
	if(err) {
		console.log("Error: " + err)
	}

	console.log("Server running on port: " + port);
});