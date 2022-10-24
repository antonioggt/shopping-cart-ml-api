const saveCartItems = () => {
  /* const cartItemsNodeList = document.querySelectorAll('.cart__item');
  const arr = [];
  cartItemsNodeList.forEach((e) => {
    arr.push(e.innerText);
  });
  const cartItems = JSON.stringify(arr);
  localStorage.setItem('cartItems', cartItems);
  */
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
