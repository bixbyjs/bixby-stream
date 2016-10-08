exports = module.exports = {
  '': require('./xom/main'),
  'factory': require('./xom/factory'),
};

exports.load = function(id) {
  try {
    return require('./' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
