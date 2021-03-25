const express = require('express'); // подключили библиотеку
const app = express(); //Пронализировали приложение

app.use(express.static('./lesson7')); // все статические данные, котолрые запрашивает клиент, необходимо отдавать в впапку

app.listen(4000, () => { // вешаем серсвер на порт 4000
 console.log('server started')
});