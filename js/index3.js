// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

let addLi = document.querySelector('ul');
for (let i = 0; i < 5; i++) {
    let text = 'item' + " " + [i];
    let newli = document.createElement('li');
   newli.innerHTML = text;
    addLi.appendChild(newli);
    addLi.insertAdjacentHTML("beforeEnd", "newli");
    newli.setAttribute('class', 'new-item');
}