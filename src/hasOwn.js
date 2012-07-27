// @sourceURL = yaul/hasOwn.js
'use strict'
module.exports = function hasOwn (what, key) {
  return Object.prototype.hasOwnProperty.call(what,key)
}

// @sourceURL = yaul/hasOwn.js