define(function () {
  return function forEach (what, fn) {
    return Array.prototype.forEach.call(what, fn)
  }
})
