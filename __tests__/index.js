const request = require('request-promise');

console.log(process.env)

const app = `http://0.0.0.0:${process.env.APP_PORT}`;

describe('should work', () => {
  test('should response with valid html', () =>
    request(app).then(html => {
      expect(html).toMatch('Total visits');
    })
  );
});
