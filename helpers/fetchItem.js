const fetchItem = async (ItemID) => {
  const url = `https://api.mercadolibre.com/items/${ItemID}`;
  const response = await fetch(url);
  const object = await response.json();
  return object;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
