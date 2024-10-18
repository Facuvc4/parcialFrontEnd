import { closeModal } from '../views/modal';
import {
  getProductLocalStorage,
  setInLocaalStorage,
} from '../persistence/local.storage';
import { getProductsToStore, renderList } from '../views/store';
import { productoActivo } from '../../main';
import Swal from 'sweetalert2';

export const saveOrModifyProduct = () => {
  const nombre = document.getElementById('nombre').value;
  const img = document.getElementById('img').value;
  const precio = document.getElementById('precio').value;
  const categoria = document.getElementById('categoria').value;
  let object = null;

  if (productoActivo) {
    object = {
      ...productoActivo,
      nombre,
      img,
      precio,
      categoria,
    };
  } else {
    object = {
      id: new Date().toISOString(),
      nombre,
      img,
      precio,
      categoria,
    };
  }
  Swal.fire('Guardado', 'El producto se guardo correctamente', 'success');
  setInLocaalStorage(object);
  getProductsToStore();
  closeModal();
};

export const deleteProduct = () => {
  Swal.fire({
    title: '¿Desea eliminar el producto?',
    text: 'Si lo eliminas sera permanente!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar!',
  }).then((result) => {
    if (result.isConfirmed) {
      const products = getProductLocalStorage();
      const result = products.filter(
        (product) => product.id !== productoActivo.id
      );
      localStorage.setItem('products', JSON.stringify(result));
      const newProducts = getProductLocalStorage();
      renderList(newProducts);
    }
  });
};
