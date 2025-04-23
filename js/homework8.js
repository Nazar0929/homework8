// 1. Напиши скрипт, який об'єднує всі елементи массива 
// в один рядок. Елементів може бути довільна кількість.
//  Нехай елементи массива в рядку будут розділені комою.


// 👉 Спочатку через for

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

let string = "";

for (let i = 0; i < friends.length; i += 1) {
    string += friends[i];
    
    if (i < friends.length - 1) {
        string += ", "
    }
}
console.log(string);


// 👉 Потім через join()


const friendss = ["Mango", "Poly", "Kiwi", "Ajax"];
console.log(friendss.join(", "));


// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = [

    'Карточка-1',

    'Карточка-2',

    'Карточка-3',

    'Карточка-4',

    'Карточка-5',

];

const cardss = [

    'Карточка-1',

    'Карточка-2',

    'Карточка-3',

    'Карточка-4',

    'Карточка-5',

];

// видалення по індексу використовуючи indexOf() або splice()

const thirdCard =  cards.splice(2, 1)
console.log(cards);

console.log("Якщо коротко можна так, створюю нову змінну де в масиві cards за допомогою методу splice видаляю 3 карточку де перше значення splice індекс елементу а друге кількість елементів для видалення");

// другий спосіб використовуючи indexOf()

const cardToRemove =  "Карточка-3";
const indexCard3 = cardss.indexOf(cardToRemove);
if (indexCard3 !== -1) {
    cardss.splice(indexCard3, 1);
}
console.log(cardss);

console.log("знаходимо індекс 3 картки якщо значення indexOf() не дорівнює -1 то видаляємо з масиву cardss за допомогою методу splice()");

// додавання по індексу 
const cardToInsert = "Карточка-6";
cards.splice(4, 0, cardToInsert);
console.log(cards);
console.log(" є назва 6 картки яку за допомогою методу splice() ми додаємо як останній елемент перше значення індексу, друге значення кількість елементів скільки прибираємо тобто 0 бо ми хочемо додати і потім значення зміної в якій лежить назва");
console.log("Тепер робимо останнє завдання заміни елемента на 2 способи ");


// оновити, тобто замінити назву картки на оновлену
// 1 спосіб

const cardToUpdate = "Карточка-4";
const cardNew = "Карточка оновлена-4"
cardss.splice(2, 1, cardNew);
console.log(cardss);
console.log("Просто змінюємо елемент масива по індексу який самі порахували, але в другому способі більш цікавіше");


// 2 спосіб


const cardToUpdates = "Карточка-4";
const indexCard4 = cards.indexOf(cardToUpdates);
if (indexCard4 !== -1) {
    cards.splice(indexCard4, 1, cardNew);
}
console.log(cards);
console.log("метод indexOf вирахував індекс елемента зі змінної cardToUpdates потім система іф я перевірив чи є він у масиві і якщо значення не дорівнює -1, а воно не дорівнює бо такий текст є в масиві то замінюємо на нову версію підставивши змінну з вирахуваним індексом");

