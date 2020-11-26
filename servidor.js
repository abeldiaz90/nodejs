const http = require('http');
const { url } = require('inspector');
var math = require("./math");

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': "text/html; charset=utf-8" });
    res.write("El resultado de la multiplicación es y sera: " + math.multiplicacion(5, 8).toString() + "\n");
    res.write(req.url);
   /* var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);*/
    res.end("!Hola Mundo!");
}).listen(9034);