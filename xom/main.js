exports = module.exports = function(factory) {
  var api = {};
  
  api.create = function() {
    return factory.create.apply(factory, arguments);
  }
  
  return api;
};

exports['@implements'] = 'http://i.bixbyjs.org/stream';
exports['@singleton'] = true;
exports['@require'] = [
  'http://i.bixbyjs.org/stream/Factory'
];
