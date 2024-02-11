const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
// console.log(breakfastMenuItemsHTML)
document.getElementById('breakfastTotalItems').innerHTML = `<p>Total-Items: ${breakfastMenu.length}</p>`;
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainMenuItemsHTML = ''
mainCourseMenu.forEach((item, index) => {
    mainMenuItemsHTML += `<p>Item ${index + 1}: ${item}</p>`;
})
document.getElementById('maincourseMenuItems').innerHTML = breakfastMenuItemsHTML;
document.getElementById('maincourseTotalItems').innerHTML = `<p>Total-Items: ${mainCourseMenu.length}</p>`;


let dessertMenuItemsHTML = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertMenuItemsHTML += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;
document.getElementById('dessertTotalItems').innerHTML = `<p>Total-Items: ${dessertMenu.length}</p>`;
