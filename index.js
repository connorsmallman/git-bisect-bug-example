const fetch = require('node-fetch');

function getRandomBreakingBadQuote() {
  return fetch('https://www.breakingbadapi.com/api/quote').then(
    response => response.json()
  );
}

module.exports = {
  getRandomBreakingBadQuote
};
