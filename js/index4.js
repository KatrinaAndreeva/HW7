// 2.В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 
let newWords = document.querySelectorAll('li>a');
for (let i = 0; i < newWords.length; i++) {
    newWords[i].insertAdjacentHTML('afterBegin', "<strong></strong>");
}


// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте +++
// реальный url к картинке. Для создания элемента используйте метод createElement. 

let pic = document.createElement('img');
pic.setAttribute("src", "https://images2.popmeh.ru/upload/img_cache/405/4053c487ce96af639074624986d81ff6_ce_1038x553x0x97_cropped_800x427.jpg");
pic.setAttribute("alt", "space");
document.body.insertBefore(pic, document.body.firstChild);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green ++++

let greenWord = document.querySelector('mark');
greenWord.append('green');
greenWord.setAttribute('class', 'green');

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let elements = document.querySelectorAll('ul li a');
let newul = '';
for (var i = elements.length - 1; i >= 0; i--) {
    //alert(i);
    //alert(elements[i].innerHTML);
    newul += '<li><a href="#">' + elements[i].innerHTML + '</a></li>';
}

let ul = document.querySelector('ul');
ul.innerHTML = newul;
