const routes = require('next-routes')();

routes
.add('/address/:address', '/address')
.add('/transaction/:transaction','/transaction')
.add('/blocknumber/:blocknumber','/blocknumber')

module.exports = routes;