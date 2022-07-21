let addbutton = document.querySelectorAll(".plus");
let minusbutton = document.querySelectorAll(".min");
let value = document.querySelectorAll(".value");
let price = document.querySelectorAll(".price");
let somme = document.querySelector(".somme");
let supprimer = document.querySelectorAll(".del");
const card = document.querySelectorAll(".x");

console.log(card);

for (let i = 0; i < addbutton.length; i++) {
  addbutton[i].addEventListener("click", function () {
    value[i].innerHTML++;
    somme.textContent = Number(price[i].innerHTML) + Number(somme.innerHTML);
  });
}
for (let i = 0; i < minusbutton.length; i++) {
  minusbutton[i].addEventListener("click", function () {
    if (value[i].innerHTML > 0) {
      value[i].innerHTML--;
      somme.textContent = Number(somme.innerHTML) - Number(price[i].innerHTML);
    }
  });
}
for (let i = 0; i < supprimer.length; i++) {
  supprimer[i].addEventListener("click", function () {
    card[i].remove();
    somme.innerHTML = parseInt(somme.innerHTML) - parseInt(price[i].innerHTML)* parseInt(value[i].innerHTML)
  });
}
