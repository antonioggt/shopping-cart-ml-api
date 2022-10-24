const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('', () => {
    expect(typeof saveCartItems()).toBe('undefined')
  });
});
