const routes = require('next-routes')();

routes
.add('/:address', '/address')
.add('/:transaction','/transaction')
.add('/:blocknumber','/blocknumber')
.add('/:blockhash','/blockhash');

module.exports = routes;