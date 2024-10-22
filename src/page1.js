import img_1 from './img-1.jpg';
import img_2 from './img-2.jpg';
import img_3 from './img-3.jpg';
import img_4 from './img-4.jpg';

export function pageLoad() {
    const contentEl = document.querySelector('#content');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'El Asador Real';

    const introduction = document.createElement('p');
    introduction.classList.add('intro');
    introduction.textContent = 'Bienvenidos a El Asador Real, el lugar donde la pasión por los cortes de carne premium se combina con una experiencia gastronómica inigualable. Aquí, seleccionamos las mejores piezas de carne, preparadas a la perfección para deleitar a los paladares más exigentes. Nuestro ambiente acogedor y elegante es el escenario perfecto para disfrutar de una comida memorable, acompañada de una carta de vinos cuidadosamente seleccionados. Ya sea que busques una cena íntima o una celebración especial, te invitamos a vivir una experiencia culinaria única, donde cada detalle está pensado para sorprenderte.';

    const end = document.createElement('p');
    end.classList.add('end');
    end.textContent = '¡Te esperamos!';

    const galleryEl = document.createElement('div');
    galleryEl.classList.add('gallery');

    const column1El = document.createElement('div')
    const column2El = document.createElement('div')
    column1El.classList.add('column');
    column2El.classList.add('column');

    const image1 = document.createElement('img');
    image1.src = img_1;
    image1.alt = 'food';
    const image2 = document.createElement('img');
    image2.src = img_2;
    image2.alt = 'food';
    const image3 = document.createElement('img');
    image3.src = img_3;
    image3.alt = 'food';
    const image4 = document.createElement('img');
    image4.src = img_4;
    image4.alt = 'food';

    contentEl.append(title, introduction, end);
    contentEl.append(galleryEl);

    column1El.append(image1, image2);
    column2El.append(image3, image4);
    galleryEl.append(column1El, column2El);
}