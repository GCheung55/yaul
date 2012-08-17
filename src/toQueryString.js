var typeOf = require('./typeOf')

module.exports = function toQueryString (obj,base){
  var queryString = []
  var key
  var qs
  var nested
  var i
  var result
  var obj = (obj) ? obj : {}

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {

      if (base !== undefined) {
        key = base + '[' + key + ']'
      } 

      switch (typeOf(obj[key])) {
        case 'object': 
          result = toQueryString(object[key], key)
          break

        case 'array':
          qs = {}
          nested = obj[key]

          for (i in nested) {
            if(nested.hasOwnProperty(i)){
              qs[i] = nested[i]
            }
          }

          result = toQueryString(qs, key)
          break

        default: 
          result = key + '=' + encodeURIComponent(obj[key]);
      }

      if (obj[key] != null) {
        queryString.push(result)
      }
    }
  }

  return queryString.join('&')
}