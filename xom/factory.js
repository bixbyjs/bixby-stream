exports = module.exports = function() {
  // Load modules.
  var Factory = require('../lib/factory');
  
  
  var factory = new Factory();
  return factory;
}

exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/stream/Factory';
exports['@require'] = [];
