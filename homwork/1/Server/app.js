/**
 * Created by Liuwh on 2016-10-14.
 */
//var http=require("http");

var express =require("express");
var app = express();
app.use(express.static("./static"));


app.listen(8088);