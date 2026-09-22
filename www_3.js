const http = require('http');
//moodul URL-i parsimiseks
const url = require('url');
//moodul failiteede haldamiseks
const path = require('path');
const fs = require('fs').promises;
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Sten Vikat, veebiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBanner = '\<img src="veebiprogrammeerimine_2026_ID.png" alt="">\n';
const pageBody = '\t<h1>Sten Vikat, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna أülikoolis</a> ning ei sislda tõsiseltvأõetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';
const dateTimeET = require('./src/dateTimeET');

http.createServer(async function(req, res){
    //vaatan URL-i
    console.log('Päring: ' + req.url);
    let currentURL = url.parse(req.url, true);
    console.log('Parsituna:' + currentURL.pathname);
    
    if(currentURL.pathname === '/'){
        res.writeHead(200, {"Content-type": "text/html"});
        //res.write('Veebiserver käivitus!');
        res.write(pageHead);
        res.write(pageBanner);
        res.write(pageBody);
        res.write('<p>Kuupäev: ' + dateTimeET.date() + '</p>');
        res.write('<p>Kellaaeg: ' + dateTimeET.time() + '</p>');
        res.write(pageFoot);
        return res.end();
    }
    else if (currentURL.pathname === '/vanasona'){
        res.writeHead(200, {"Content-type": "text/html"});
        //res.write('Veebiserver käivitus!');
        res.write(pageHead);
        res.write(pageBanner);
        res.write('\t<h1>Täname eesti vanasõna</h1>\'\n\t<p>Siin näed tänaseks päevaks loositud vanasõna.</p>\n\t<hr>');
        res.write(pageFoot);
        return res.end();
    }
    else if (currentURL.pathname === '/veebiprogrammeerimine_2026_ID.png'){
        //liidame kättesaamatu päris kataloog jms virtuaalse failiteeks
        let bannerPath = path.join(__dirname, 'pildid', currentURL.pathname);
        try {
            const data = await fs.readFile(bannerPath);
            res.writeHead(200, {"Content-type": "image/png"});
            return res.end(data);
        } catch (err) {
            res.writeHead(404, {"Content-type": "text/plain; charset=ut8"});
            return res.end('Pilti ei leitud!');
        }
    }

/*     else if (currentURL.pathname === '/veebiprogrammeerimine_2026_ID.png'){
        //liidame kättesaamatu päris kataloog jms virtuaalse failiteeks
        let bannerPath = path.join(__dirname, 'pildid', currentURL.pathname);
        fs.readFile(bannerPath, (err, data)=>{
            if(err){
                throw(err);
            }  else {
                 res.writeHead(200, {"Content-type": "image/png"});
                 return res.end(data);
            }
        });
    }

    else {
        return res.end('Viga 404! Ei leia sellist lehte!')
    } */
}).listen(5206);