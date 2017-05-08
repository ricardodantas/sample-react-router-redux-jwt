const { NODE_ENV } = process.env;

if (NODE_ENV === 'production' || NODE_ENV === 'test') {
  module.exports = require('./configureStore.prod');
}
else {
  module.exports = require('./configureStore.dev');
}
