const request = require('request-promise');

const app = `http://external:8888`;

describe('should work', () => {
  test('should response with valid html', () =>
    request(app).then(html => {
      expect(html).toMatch('Total visits');
    })
  );
});
