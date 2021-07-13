const itemCategories = document.querySelectorAll('.item');
console.log(`В списке ${itemCategories.length} категории`);
itemCategories.forEach(element =>
    console.log(
        `Категория - ${element.firstElementChild.textContent},
        Количество элементов - ${element.lastElementChild.children.length}`, 
    ),
    );