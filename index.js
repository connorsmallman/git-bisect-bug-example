const fetch = require('node-fetch');

function getRandomBreakingBadQuote() {
  return fetch('https://www.breakingbadapi.com/api/quote/random').then(
    response => response.json()
  );
}

module.exports = {
  getRandomBreakingBadQuote
};
