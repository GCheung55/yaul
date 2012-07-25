// @sourceURL = yaul/hasOwn.js

module.exports = function hasOwn (what, key) {
  return Object.prototype.hasOwnProperty.call(what,key)
}

// @sourceURL = yaul/hasOwn.js