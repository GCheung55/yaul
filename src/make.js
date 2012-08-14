module.exports = function make (context, key, value ) {
  return context[key] = context[key] || value
}
