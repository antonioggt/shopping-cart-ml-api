require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('se fetchItem é uma função', async () => {
    expect.assertions(1);
    expect(await fetchItem).toBeInstanceOf(Function);
  });
  it('Deve chamar a função fetch', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527')

    expect(global.fetch).toHaveBeenCalled();
  });
  it('Deve chamar a função fetch com o valor adequado', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527')

    expect(global.fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Se dado determinado parâmetro, retorna a estrutura de dados correta', async () => {
    expect.assertions(1);
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it("Se ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: 'You must provide an url'", async () => {
    await expect(fetchItem()).rejects.toThrow('You must provide an url');
  });
});
