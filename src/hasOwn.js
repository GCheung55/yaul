define(function () {
  return function hasOwn (what, key) {
    return Object.prototype.hasOwnProperty.call(what,key)
  }
})
