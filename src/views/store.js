import { getProductLocalStorage } from '../persistence/local.storage';
import { openModal } from './modal';
import { setProductoActivo } from '../../main';

export const getProductsToStore = () => {
  const products = getProductLocalStorage();
  renderList(products);
};

export const renderList = (productsIn) => {
  const burguers = productsIn.filter(
    (product) => product.categoria === 'Hamburguesas'
  );
  const papas = productsIn.filter((product) => product.categoria === 'Papas');
  const gaseosas = productsIn.filter(
    (product) => product.categoria === 'Gaseosas'
  );

  const renderProductGroup = (products, title) => {
    if (products.length > 0) {
      const productosHTML = products.map((product, index) => {
        return `
        <div class="product_card" id="product-${product.categoria}-${index}">
        <img src="${product.img}" alt="${product.nombre}" />
        <div class="product_info">
        <h3>${product.nombre}</h3>
        <p><b>Precio: </b>${product.precio}</p>
        </div>
        </div>
        `;
      });

      return `
      <section class="section_store">
      <h2>${title}</h3>
      <div class="container_products">
      ${productosHTML.join('')}
      </div>
      </section>
      `;
    } else {
      return ``;
    }
  };

  const appContainer = document.getElementById('storeContainer');

  appContainer.innerHTML = `
  ${renderProductGroup(burguers, 'Hamburguesas')}
  ${renderProductGroup(papas, 'Papas')}
  ${renderProductGroup(gaseosas, 'Gaseosas')}
  `;

  const addEvents = (productsIn) => {
    if (productsIn) {
      productsIn.forEach((element, index) => {
        const productContainer = document.getElementById(
          `product-${element.categoria}-${index}`
        );

        productContainer.addEventListener('click', () => {
          setProductoActivo(element);
          openModal();
        });
      });
    }
  };

  addEvents(burguers);
  addEvents(papas);
  addEvents(gaseosas);
};
