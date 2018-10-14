const app = require('../app');
const config = require('../config/');
let server = app.listen(config.get('svport'));
console.log(`${config.get('svhostname')} Server running at: ${config.get('svport')}`);