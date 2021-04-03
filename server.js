
const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./lesson8'));
app.use(bodyParser.json());

app.get('/itemslist/:page', (req, res) => {
    const page = req.params.page;
    fs.readFile(`./lesson8/database/items${page}.json`, 'utf8', (err, data) => {
        res.send(data);
    });
});

app.post('/itemslist', (req, res) => {
    const offset = 12;
    const file = './lesson8/database/items3.json';

    fs.readFile(file, 'utf8', (err, data) => {
        const list = JSON.parse(data || {});
        const amoundOfData = Object.keys(list).length;
        const newID = offset + amoundOfData + 1;
        const newItem = req.body;
        newItem.id = newID;
        list[newID] = newItem;
        fs.writeFile(file, JSON.stringify(list), (err) => {
            if (err) {
                console.log(err);
            } else {
                res.send(list);
            }
        });
    })
})

app.post('/cartlist', (req, res) => {
    const offset = 0;
    const file = './lesson8/database/cart.json';

    fs.readFile(file, 'utf8', (err, data) => {
        const list = JSON.parse(data || {});
        const amoundOfData = Object.keys(list).length;
        const newID = offset + amoundOfData + 1;
        const newItem = req.body;
        newItem.id = newID;
        list[newID] = newItem;
        fs.writeFile(file, JSON.stringify(list), (err) => {
            if (err) {
                console.log(err);
            } else {
                res.send(list);
            }
        });
    })
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log('Server started!');
});