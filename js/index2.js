// 1. Найти в коде список ul и добавить класс “list”
// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// 3. На li через один (начиная с самого первого) установить класс “item”
// 4. На все ссылки в примере установить класс “custom-link”

//1    ++++++
let list = document.querySelector('ul');
list.setAttribute('class', 'list');

//2    ++++++++

let link = document.getElementsByTagName('a')[5];
link.setAttribute('id', "link");

//3 ++++++++
let classlist = document.querySelectorAll('li');

let numberclass = document.querySelectorAll("li").length;
for (let i = 0; i < numberclass; i += 2) {
 classlist[i].classList.add("my-class");
}

//4 ++++++++
let links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
 links[i].setAttribute('class', 'custom-link');
}
