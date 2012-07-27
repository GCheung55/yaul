// @sourceURL = yaul/forEach.js
'use strict'
module.exports = function forEach (what, fn) {
  return Array.prototype.forEach.call(what, fn)
}

// @sourceURL = yaul/forEach.js