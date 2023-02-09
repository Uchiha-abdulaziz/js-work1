// const num = 1234; //! Number
// const str = "1234567890"; //! Street
// const bool = true || false; //!Boolean
// const undef = undefined; //! Undefined
// const nul = null; //! Undefined
// const bigint = 12323452n;
// const symbol = Symbol("hr"); //! Symbol

// //? 1-Сложный тип данных

// const obj = {
//   name: "Object",
//   birth: "20.30",
//   age: 13,
//   city: "Jalal-Abad",
//   car: "Golf",
//   carcolor: "red",
// }; //! Object
// console.log(num);
// 0
// const money = prompt("Ваш бюджет на месяц?");
// console.log(money);

// const time = prompt("Введите дату в формате YYYY-MM-DD");
// console.log(time);
// const q1 = prompt("Введите обязательную статью расходов в этом месяце");
// const q2 = prompt("Во сколько обойдется");

// const appData = {
//   budget: money,
//   timeData: time,
//   expenses: {
//     [q1]: q2,
//   },
//   optionalExpenses: null,
//   income: null,
//   savings: false,
// };
// console.log(appData);

// // !  DOM

// let p = document.querySelector(".text");
// let div = document.createElement("div");

// console.log(div);
// //?метод querySelector - для получения тегов из html с помощью document
// p.innerHTML = "Hello"; //!innerHTML = для добавления тегов в тэг

// p.style.color = "green";
// p.style.fontSize = "40px";
// div.append(p);
// div.style.backgroundColor = "tomato";
// console.log(p);

// document.body.append(div);
// //document.body.p.style.backgroundColor = "red"

let p = 0;
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let text = document.querySelector(".text");
console.log(minus);

text.innerHTML = p;

function incrementCount() {
  p = p + 100;
  text.innerHTML = p;
}

function decrementCont() {
  p = p - 90;
  text.innerHTML = p;
}

plus.addEventListener("click", () => {
  incrementCount();
  text.style.transition = "all 2s";
  plus.style.transition = "all 2s";
  document.body.style.backgroundColor = "khaki";
  document.body.style.transition = "all 2s";
  plus.style.backgroundColor = "green";
  text.style.fontSize = "150px";
  text.style.color = "white";
});

minus.addEventListener("click", () => {
  decrementCont();
  text.style.transition = "all 2s";
  minus.style.transition = "all 2s";
  document.body.style.backgroundColor = "tomato";
  document.body.style.transition = "all 2s";
  minus.style.backgroundColor = "blue";
  text.style.fontSize = "50px";
});
