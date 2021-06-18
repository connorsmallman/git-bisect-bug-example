const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const { getRandomBreakingBadQuote } = require('./index.js');

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
