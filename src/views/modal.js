import { productoActivo } from '../../main';
import { deleteProduct, saveOrModifyProduct } from '../services/product';

document.getElementById('acceptButton').addEventListener('click', () => {
  saveOrModifyProduct();
});

document.getElementById('cancelButton').addEventListener('click', () => {
  closeModal();
});

document.getElementById('deleteButton').addEventListener('click', () => {
  deleteProduct();
  closeModal();
});

//functions
export const openModal = () => {
  document.getElementById('modalPopUp').style.display = 'flex';
  const btnDelete = document.getElementById('deleteButton');
  if (productoActivo) {
    btnDelete.style.display = 'block';
    const nombre = document.getElementById('nombre');
    const img = document.getElementById('img');
    const precio = document.getElementById('precio');
    const categoria = document.getElementById('categoria');

    nombre.value = productoActivo.nombre;
    img.value = productoActivo.img;
    precio.value = productoActivo.precio;
    categoria.value = productoActivo.categoria;
  } else {
    btnDelete.style.display = 'none';
  }
};

export const closeModal = () => {
  document.getElementById('modalPopUp').style.display = 'none';
  resetModal();
};

const resetModal = () => {
  const nombre = document.getElementById('nombre');
  const img = document.getElementById('img');
  const precio = document.getElementById('precio');
  const categoria = document.getElementById('categoria');

  nombre.value = '';
  img.value = '';
  precio.value = '';
  categoria.value = 'Seleccione una categoria';
};
