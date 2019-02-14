// code away!
require('dotenv').config();
const server = require('./server');

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Bacon, eggs. You are now listening to port ${port}`);
});
