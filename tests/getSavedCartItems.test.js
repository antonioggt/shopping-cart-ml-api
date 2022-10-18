const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  expect.assertions(1);
  it('se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () =>{
    getSavedCartItems();
    expect(global.localStorage.setItem).toHaveBeenCalled();
  });
  expect.assertions(1);
  it('se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro', () =>{
    getSavedCartItems();
    expect(global.localStorage.setItem).toHaveBeenCalledWith('cartItems');
  });
});
