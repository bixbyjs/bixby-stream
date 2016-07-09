function Factory() {
}

Factory.prototype.create = function(options) {
  console.log('Factory#create');
  
  // TODO: Make this pluggable.
  var net = require('net');
  return net.connect(options.port, options.hostname);
}


module.exports = Factory;
