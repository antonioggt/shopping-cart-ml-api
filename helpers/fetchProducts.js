/* const { results } = require("../mocks/search"); */

const createUrl = (termo) => `https://api.mercadolibre.com/sites/MLB/search?q=${termo}`;

const fetchProducts = async (endpoint) => {
  if (endpoint === undefined) {
    throw new Error('You must provide an url');
  } 
  try {
  const url = createUrl(endpoint);
  const response = await fetch(url);
  const data = await response.json();
  
  const { results } = data;
  return results;
  } catch (error) {
     /* console.log(error); */
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
