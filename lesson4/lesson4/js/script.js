///////////  example 1 - поиск слова в строке
const example1 = 'I love JavaScript!';
const re1 = /JavaScript/;  // найдет JavaScript
const result1 = example1.match(re1);
console.log('Пример 1', result1);

/////////////   example 2 - поиск всех слов с одинаковой частью
const example2 = 'I love JavaScript and TypeScript!';
const re2 = /[\S]+Script/g;  // найдет JavaScript, TypeScript
const result2 = example2.match(re2);
console.log('Пример 2', result2);

/////////////   example 3 - поиск числа в строке
const example3 = '20000 league under the sea!';
const re3 = /[\d]+/g;  // найдет 20000
const result3 = example3.match(re3);
console.log('Пример 3', result3);

/////////////   example 4 - работа с ()
const example4 = '20000 league under the sea!';
const re4 = /\d+(.*)under/;  //  выведет массив из 2 элементов: '20000 league under'; ' league '
const result4 = example4.match(re4);
console.log('Пример 4', result4);

/////////////   example 5 - парсинг ссылок
const example5 = 'Ссылка: <a href="#mylink">My Link</a> Текст после ссылки';
const re5 = /<a href="(.*)">/;  //  выведет массив из 2 элементов: '<a href="#mylink">'; '#mylink'
const result5 = example5.match(re5);
console.log('Пример 5', result5);

/////////////   example 6 - поиск диалогов
const example6 = `He said: "First quote", she said: 'Second quote!'`;
const re6 = /(['"])(.*?)\1/g;  //  найдет кавычки -> найдет текст после -> конец текста будет равен тому, что было найдено в первом случае (т.е. таким же кавычкам)
const result6 = example6.match(re6);
console.log('Пример 6', result6);

/////////////   example 7 - изменение строк
const example7 = 'I love JavaScript!';
const result7 = example7.replace(/JavaScript/, 'TypeScript');  // ищем JavaScript и меняем на TypeScript
console.log('Пример 7', result7);

/////////////   example 8 - изменение строк
let example8 = 'AAAAABBBBCCCCDDDDEEF000000'   // есть строка, нужно заменить на: A5B4C4D4E2F106, т.е. на символ и количество этого символа
const result8 = example8.replace(/(.)\1+/g, (match, c) => {
    return c + match.length;
});
console.log('Пример 8', result8);