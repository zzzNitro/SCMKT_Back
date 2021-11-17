const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { preCharge } = require('./src/controllers/PreChargeController')
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
