const alimenti = ["Uova", "Patate", "Pomodori", "Pasta", "Cioccolato", "Panna", "Burro", "Olio", "Mele", "Pere", "Mandarini"];

const ElementUl = document.createElement('ul');
document.getElementsByTagName('body')[0].append(ElementUl);

for ( let i = 0; i < alimenti.length; i++){
  const ElementLi = document.createElement('li');
  ElementLi.innerHTML = alimenti[i];
  ElementUl.append(ElementLi);
}