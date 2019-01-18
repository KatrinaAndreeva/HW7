// 1. Найти параграф и получить его текстовое содержимое (только текст!) ++++++++++++++++
let par = document.querySelector('p');
console.log(par.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает
// информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0)ю
// let nodeElement = document.querySelector('');
function getInfoNode(node) {
    return document.nodeType;

}
// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]    ++++/-----

let elements = document.querySelectorAll('li');
for (let i = 0; i < elements.length; i++) {
    let arr = [];
    arr += elements[i].textContent;
    console.log([arr]);
}
