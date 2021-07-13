const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const menuItem = document.getElementById('ingredients');
  const itemName = ingredients.map(ingredient => {
    const itemList = document.createElement('li');
    itemList.classList.add('list');
    itemList.textContent = ingredient;
    return itemList;
  });
  menuItem.append(...itemName);
  console.log(...itemName);