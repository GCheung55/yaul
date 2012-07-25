// @sourceURL = yaul/isArray.js

module.exports = function isArray (arg) {
  return Object.prototype.toString.call(arg) === '[object Array]'
}

// @sourceURL = yaul/isArray.js