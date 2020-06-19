// aqui se inicializo express y se pego en app.js
const app = require('./app');

async function main() {
   await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();