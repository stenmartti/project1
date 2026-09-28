const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs').promises;

const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Sten Vikat, veebiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBanner = '<img src="veebiprogrammeerimine_2026_ID.png" alt="">\n';
const pageBody = '\t<h1>Sten Vikat, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ülikoolis</a> ning ei sisalda tõsiseltvõetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>\n\t<p><a href="http://greeny.cs.tlu.ee:5206/mikstlu">Siin saad lugeda, miks tulin TLÜ-sse õppima</a></p>\n\t<hr>\n\t<p><a href="http://greeny.cs.tlu.ee:5206/vanasona">Siit leiad vanasõna</a></p>';
const pageFoot = '\n</body>\n</html>';

const dateTimeET = require('./src/dateTimeET');
const RandomVanasona = require('./src/randomvanasona.js');

http.createServer(async function(req, res) {
    console.log('Päring: ' + req.url);
    let currentURL = url.parse(req.url, true);
    console.log('Parsituna:' + currentURL.pathname);
    
    if (currentURL.pathname === '/') {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write(pageHead);
        res.write(pageBanner);
        res.write(pageBody);
        res.write('<p>Kuupäev: ' + dateTimeET.date() + '</p>');
        res.write('<p>Kellaaeg: ' + dateTimeET.time() + '</p>');
        res.write('<img src="kass.jpg" alt="">\n');
        res.write(pageFoot);
        return res.end();
    }
    else if (currentURL.pathname === '/vanasona') {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write(pageHead);
        res.write(pageBanner);
        res.write('\t<h1>Siin on loositud vanasõna</h1>\n\t<hr>');
        await RandomVanasona.RandomVanasona(req, res);
        res.write('<p><a href="http://greeny.cs.tlu.ee:5206/">Avalehele tagasi</a></p>');
        res.write(pageFoot);
        return res.end();
    }
    else if (currentURL.pathname === '/mikstlu') {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write(pageHead);
        res.write(pageBanner);
        res.write('\t<h1>Miks otsustasin tulla just Tallinna Ülikooli?</h1>\n\t<p>Sest Tallinna Ülikool on väga eepiline ja äge ja vapustav.</p>\n\t<hr>');
        res.write('<img src="koer.jpg" alt="">\n');
        res.write('<p><a href="http://greeny.cs.tlu.ee:5206/">Avalehele tagasi</a></p>');
        res.write(pageFoot);
        return res.end();
    }
    else if (currentURL.pathname.endsWith('.jpg') || currentURL.pathname.endsWith('.jpeg')) {
        let imageName = path.basename(currentURL.pathname);
        let imagePath = path.join(__dirname, 'pildid', imageName);
        try {
            const data = await fs.readFile(imagePath);
            res.writeHead(200, { "Content-Type": "image/jpeg" });
            return res.end(data);
        } catch (err) {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            return res.end('Pilti ei leitud!');
        }
    }
    }
   /*  else if (currentURL.pathname === '/veebiprogrammeerimine_2026_ID.png') {
        let bannerPath = path.join(__dirname, 'pildid', currentURL.pathname);
        try {
            const data = await fs.readFile(bannerPath);
            res.writeHead(200, { "Content-Type": "image/png" });
            return res.end(data);
        } catch (err) {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            return res.end('Pilti ei leitud!');
        }
    } */
).listen(5206);