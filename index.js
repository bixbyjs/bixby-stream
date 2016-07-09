exports = module.exports = function stream(id) {
  var map = {
    'factory': './xom/factory'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add('factory');
};
