  /* const helper = (event) => {
    const vetorLS = JSON.parse(localStorage.getItem('cartItems'));
    const elementString = vetorLS.find((string) => string === event.target.innerText);
    const index = vetorLS.indexOf(elementString);
    vetorLS.splice(index, 1);
    const itemToSave = JSON.stringify(vetorLS);
    localStorage.setItem('cartItems', itemToSave);
}; */

const getSavedCartItems = () => {
  /* const cartOL = document.getElementsByClassName('cart__items')[0];
  let arr = JSON.parse(localStorage.getItem('cartItems'));
  if (arr === null) {
    arr = [];
  }
  if (arr.length > 0) {  
    arr.forEach((e) => {
    const li = document.createElement('li');
    li.innerText = e;
    li.addEventListener('click', () => {
      li.remove();
    });
    li.addEventListener('click', helper);
    cartOL.appendChild(li);
    });
  } */
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
