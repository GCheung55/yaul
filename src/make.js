// @sourceURL = yaul/make.js
'use strict'
modules.exports = function make (context, key, value ) {
  return context[key] = context[key] || value
}

// @sourceURL = yaul/make.js
