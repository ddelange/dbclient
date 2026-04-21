const config = require('./src/config');

if (process.env.NODE_ENV !== 'test') {
  const outputDirectory = config.get('outputDirectory');
  if (!outputDirectory) {
    require('./src/configValidation').validate(require('pelias-config').generate());
  }
}

module.exports = function(opts) {
  const outputDirectory = config.get('outputDirectory');
  if (outputDirectory) {
    return require('./src/fileSink')(outputDirectory, opts);
  }
  return require('./src/sink')(opts);
};
