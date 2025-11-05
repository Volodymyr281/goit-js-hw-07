const categorieslist = document.querySelector('#categories');
const categories = categorieslist.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const elementsCount = category.querySelectorAll('ul li').length;

    console.log(`Category: ${title}`);
    console.log(`Elements: ${elementsCount}`);
});