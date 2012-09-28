module.exports = function make (context, key, value ) {
  context[key] = context[key] || value
  return context[key]
}
