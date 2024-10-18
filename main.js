import { renderCategories } from './src/services/categories';
import { getProductsToStore } from './src/views/store';
import { openModal } from './src/views/modal';
import './style.css';
import { searchProductByName } from './src/services/search.bar';

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
  productoActivo = productoIn;
};

renderCategories();
getProductsToStore();

//Header

document.getElementById('btn_add').addEventListener('click', () => {
  setProductoActivo(null);
  openModal();
});

document.getElementById('btn_search').addEventListener('click', () => {
  searchProductByName();
});

const toggleButton = document.getElementById('toggleButton');
const categoryList = document.getElementById('listFilter');

toggleButton.addEventListener('click', () => {
  // Alternar la clase para mostrar u ocultar las categorías
  categoryList.classList.toggle('open');

  // Alternar la rotación del ícono
  toggleButton.classList.toggle('rotated');
});
