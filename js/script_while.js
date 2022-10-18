const alimenti = ["Uova", "Patate", "Pomodori", "Pasta", "Cioccolato", "Panna", "Burro", "Olio", "Mele", "Pere", "Mandarini"];

const ElementUl = document.createElement('ul');
document.getElementsByTagName('body')[0].append(ElementUl);

let c = 0;

// SOLUZIONE 1 WHILE
/*
while (c < alimenti.length){
  const ElementLi = document.createElement('li');
  ElementLi.innerHTML = alimenti[c];
  ElementUl.append(ElementLi);
  c++;
}
*/

// SOLUZIONE 2 WHILE
while (ElementUl.childElementCount != alimenti.length){
  const ElementLi = document.createElement('li');
  ElementLi.innerHTML = alimenti[c];
  ElementUl.append(ElementLi);
  c++;
}