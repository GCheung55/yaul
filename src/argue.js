define(function () {
  
  var isArray = Array.isArray || function(it) { 
    return Object.prototype.toString.call(it) === '[object Array]' 
  }

  return function argue (args,offset) {
    return isArray(args)? args: Array.prototype.slice.call(arguments,offset || 0)
  }
})
