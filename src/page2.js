import menu from './menu.jpg';

export function DisplayMenu() {
    const contentEl = document.querySelector('#content');
    contentEl.innerHTML = '';

    const menuImg = document.createElement('img');
    menuImg.classList.add('menu');
    menuImg.src = menu;
    menuImg.alt = 'restaurant menu';

    contentEl.append(menuImg);
}