const request = require('request-promise');

const external = `http://external:8888`;

describe('should work', () => {
  test('should response with valid html', () =>
    request(external).then(html => {
      expect(html).toMatch('Total visits');
    })
  );
});
