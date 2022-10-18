const alimenti = ["Uova", "Patate", "Pomodori", "Pasta", "Cioccolato", "Panna", "Burro", "Olio", "Mele", "Pere", "Mandarini"];
let c = 0;

const ElementUl = document.createElement('ul');
document.getElementsByTagName('body')[0].append(ElementUl);

while (c < alimenti.length){
  const ElementLi = document.createElement('li');
  ElementLi.innerHTML = alimenti[c];
  ElementUl.append(ElementLi);
  c++;
}