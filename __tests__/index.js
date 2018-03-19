const request = require('request-promise');
const cheerio = require('cheerio')

const app = `http://external:8888`;

describe('should work', () => {
  test('should respond with valid html', () =>
    request(app).then(html => {
      const $ = cheerio.load(html);
      const firstVisitsCount = Number($('i').text());
      expect(html).toMatch('Total visits');
    })
  );

  test('should respond always incremented number', () =>
    request(app).then(html => {
      const $ = cheerio.load(html);
      const firstVisitsCount = Number($('i').text());

      return request(app).then(html => {
        const $ = cheerio.load(html);
        const secondVisitsCount = Number($('i').text());
        expect(secondVisitsCount - firstVisitsCount).toBe(1)
      });
    })
  );
});
