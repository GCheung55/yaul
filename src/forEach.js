module.exports = function forEach (what, fn) {
  return Array.prototype.forEach.call(what, fn)
}
