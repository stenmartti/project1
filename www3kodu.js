const http = require('http');
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Sten Vikat, veebiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Sten Vikat, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna أülikoolis</a> ning ei sislda tõsiseltvأõetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';
const dateTimeET = require('./src/dateTimeET');

http.createServer(function(req, res){
    res.writeHead(200, {"Content-type": "text/html"});
    //res.write('Veebiserver käivitus!');
    res.write(pageHead);
    res.write(pageBody);
    res.write('<p>Kuupäev: ' + dateTimeET.date() + '</p>');
    res.write('<p>Kellaaeg: ' + dateTimeET.time() + '</p>');
    res.write(pageFoot);
    return res.end();
}).listen(5206);