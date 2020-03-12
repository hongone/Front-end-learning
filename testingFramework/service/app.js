var express= require("express");

var app = express();

app.get("/test",function (req,res) {
	res.send({
		data : "Hello River8"
	})
});

var server = app.listen(3000,function(){
	console.log("Server started");
});

module.exports = app;
