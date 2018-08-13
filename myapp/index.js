let express= require("express");
let http = require("http");
let app=express();

app.use((req,res)=>{
	res.writeHead("200",{"content-type":"text/plain"});
	res.end("h w");
});
http.createServer(app).listen(8070);