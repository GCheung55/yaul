// @sourceURL = yaul/make.js

modules.exports =  function make (context, key, value ) {
  return context[key] = context[key] || value
}

// @sourceURL = yaul/make.js
