//traer productos localStorage
export const getProductLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  return products;
};

//guardar en localStorage

export const setInLocaalStorage = (product) => {
  let products = getProductLocalStorage();
  const existingIndex = products.findIndex((productLocal) => {
    return productLocal.id === product.id;
  });

  if (existingIndex !== -1) {
    products[existingIndex] = product;
  } else {
    products.push(product);
  }

  localStorage.setItem('products', JSON.stringify(products));
};
