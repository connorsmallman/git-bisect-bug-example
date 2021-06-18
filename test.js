const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const { getRandomBreakingBadQuote, getRandomBreakingBadQuoteByAuthor } = require('./index.js');

it('should return a random quote', async () => {
  const quote = await getRandomBreakingBadQuote();
  const schema = {
    properties: {
      quote_id: { type: 'number' },
      quote: { type: 'string' },
      author: { type: 'string' },
      series: { type: 'string' }
    },
    required: ['quote_id', 'quote', 'author', 'series']
  };
  expect(quote).toMatchSchema(schema);
});

it('should return a random quote by author',  async () => {
  const author = 'Jesse Pinkman';
  const quote = await getRandomBreakingBadQuoteByAuthor(author);
  const schema = {
    properties: {
      quote_id: { type: 'number' },
      quote: { type: 'string' },
      author: { type: 'string' },
      series: { type: 'string' }
    },
    required: ['quote_id', 'quote', 'author', 'series']
  };
  expect(quote[0]).toMatchSchema(schema);
  expect(quote[0].author).toBe('Jesse Pinkman');
});