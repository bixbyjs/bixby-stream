function Factory() {
}

Factory.prototype.create = function(options) {
  // TODO: Make this pluggable.
  var net = require('net');
  return net.connect(options.port, options.hostname);
}


module.exports = Factory;
