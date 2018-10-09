const fs = require('fs');
const path = require('path');
const references = require('../src/references');

const page = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <title>Référence sur l'Anthropocène</title>
  </head>
  <body>
     <h1>Références</h1>
     <ul>
      ${references.map(reference => `<li>${reference.title}</li>`).join('\n')}
     </ul>
  </body>
</html>
`;

fs.writeFileSync(path.join(__dirname, '../public/noscript.html'), page);
