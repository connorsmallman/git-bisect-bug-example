const fetch = require('node-fetch');

function getRandomBreakingBadQuote() {
  return fetch('https://www.breakingbadapi.com/api/quote').then(
    response => response.json()
  );
}

function getRandomBreakingBadQuoteByAuthor(author) {
  const param = author.replace(' ', '+');
  return fetch(`https://www.breakingbadapi.com/api/quote/random?author=${param}`).then(
    response => response.json()
  );
}

module.exports = {
  getRandomBreakingBadQuote,
  getRandomBreakingBadQuoteByAuthor,
};
