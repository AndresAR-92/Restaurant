import img_logo from './logo.jpg';

export function DisplayInfo() {
    const contentEl = document.querySelector('#content');
    contentEl.innerHTML = '';

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Sobre Nosotros';

    const introduction = document.createElement('p');
    const secondParagraph = document.createElement('p');
    introduction.classList.add('intro');
    secondParagraph.classList.add('intro');
    introduction.textContent = 'Nuestra historia comenzó con una pasión compartida: el arte de asar carne y crear experiencias memorables en torno a la mesa. Hace años, en un pequeño asador de barrio, nuestros fundadores soñaron con un lugar donde los cortes de carne fueran el centro de una celebración de sabores, tradición y calidad. Con dedicación y cariño, seleccionaron las mejores carnes y perfeccionaron las técnicas de cocción para realzar su sabor natural.';
    secondParagraph.textContent = 'Así nació El Asador Real, un espacio donde se honra cada pieza de carne y se rinde homenaje a las raíces de la parrilla tradicional. Desde nuestros primeros días, nos hemos comprometido a mantener ese espíritu familiar, donde el cliente es nuestro invitado de honor y cada plato es preparado con la misma dedicación que inspiró nuestra apertura. Hoy, continuamos con esa tradición, evolucionando constantemente para ofrecer una experiencia culinaria que combina nuestras raíces con un toque contemporáneo, en un ambiente cálido y acogedor.';

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = img_logo;
    logo.alt = 'Restaurant logo';

    contentEl.append(title, introduction, secondParagraph, logo);
}