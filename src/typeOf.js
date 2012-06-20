define(function(undef){
  function typeOf ( item, type ){
    var thetype = typeof item
    
    if (item === null)
      return 'null'

    function toString (it) {
      return Object.prototype.toString.call(it)
    }

    if (thetype === 'object') {
      if (item) {
        if (typeof item.length === 'number'){
          if (String(item) == '[object Array]') {
            thetype = 'array'
          }

          if (String(item) === '[object Arguments]') {
            thetype = 'arguments'
          }
        } else if((null !== item) && !isNaN(item) && ("undefined" !== typeof item.getDate)){
          thetype = 'date'
        }

        if(String(item) === '[object RegExp]') {
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

    return (type == undef) ? thetype: thetype === type;
  }

  return typeOf
})