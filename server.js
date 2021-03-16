

// создаем переменные где через require получаем достук к объекту(билиотека) унее есть свои методы
let http = require('http');
const fs = require('fs'); //файл систем, предоставляет объект где содержатся, методы для работы с файловой системой.



// local3000 вместо домена.URl будет путь к его страницам. на каждый запрос с клиента(бразуера) будет запускатся фукция createServer
const server = http.createServer(function (req, res) {   //req вся информация о запросе пришедего с клиента(URL.cookie) res.методы для ответа бразуератзь
    let body = null;
    try {
        const ext = req.url.split('.')[1]
        const ifSvg = ext === 'svg'
        if (ifSvg) {
            res.setHeader('Content-Type', 'image/svg+xml')
        }
        const ifPng = ext === 'png'
        if (ifPng) {
            res.setHeader('Content-Type', 'image/png')
        }
        const ifJson = ext === 'json'
        if (ifJson) {
            res.setHeader('Content-Type', 'application/json')
        }

        body = fs.readFileSync(`./lesson3${req.url}`) // считает файлы (загрузит), по пути к которому указан путь.
    } catch {
        body = fs.readFileSync(`./lesson3/index.html`)
    }

    res.end(body);
});

const port = process.env.PORT || 3000;
server.listen(port);

console.log(`Server started on port ${port}!`);

