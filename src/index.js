const express = require('express');
const request = require('request-promise');

express().use((_, res) => {
  request(
    { uri: `http://internal:8888`, json: true }
  ).then(
    ({ visits }) => res.send(template(visits)),
    (error) => res.status(500).send(error),
  );
}).listen(8888);

function template(visits) {
  return `
    <html>
      <body>
        <h1>Total visits: ${visits}</h1>
      </body>
    </html>
  `;
}
