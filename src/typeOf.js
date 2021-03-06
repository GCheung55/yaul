module.exports = function typeOf ( item, type, undef ){
  var thetype = typeof item
  
  if (item === null)
    return 'null'

  function toString (it) {
    return Object.prototype.toString.call(it)
  }

  if (thetype === 'object') {
    if (item) {
      var string = toString(item)
      if (typeof item.length === 'number'){
        if (string == '[object Array]') {
          thetype = 'array'
        }

        if (string === '[object Arguments]') {
          thetype = 'arguments'
        }
      } else if((null !== item) && !isNaN(item) && ("undefined" !== typeof item.getDate)){
        thetype = 'date'
      }

      if(string === '[object RegExp]') {
        thetype = 'regexp';
      }

      if (item.nodeName){
        if (item.nodeType === 1) {
          thetype =  'element';
        } else if (item.nodeType === 3) {
          thetype = (/\S/).test(item.nodeValue) ? 'textnode' : 'whitespace';
        }
      }
    } else {
      thetype = 'null';
    }
  }

  return (type === undef) ? thetype: thetype === type;
}