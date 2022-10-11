require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('se fetchProducts é uma função', async () => {
    expect.assertions(1);
    expect(await fetchProducts).toBeInstanceOf(Function);
  });
  it('Deve chamar a função fetch', async () => {
    expect.assertions(1);
    await fetchProducts('computador')

    expect(global.fetch).toHaveBeenCalled();
  });
  it('deve chamar a função fetch com o valor adequado', async () => {
    expect.assertions(1);
    await fetchProducts('computador')
    const validUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

    expect(global.fetch).toHaveBeenCalledWith(validUrl);
  });
  it('Se dado determinado parâmetro, retorna a estrutura de dados correta', async () => {
    expect.assertions(1);
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('Se dado determinado parâmetro, retorna a estrutura de dados correta', async () => {
    expect.assertions(1);
    expect(await fetchProducts()).toThrow('You must provide an url');
  });
});
