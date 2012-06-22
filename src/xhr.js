define(function (undef) {

  var XHR = (function(){
    var ins = [
       function(){return new ActiveXObject('Microsoft.XMLHTTP')}
      ,function(){return new ActiveXObject('Msxml2.XMLHTTP')}
      ,function(){return new XMLHttpRequest}
    ],i
           
    return (function tryX() {
      while(ins.length){
       try { i = ins.pop(); i() } 
       catch(e) { tryX() }
       finally{ return i }
      }
    }())
  }())

  function ie8Request (method, url, data, callback) {
    var xdr = new XDomainRequest()
    xdr.onload = function() {
      var response
      try {
        response = JSON.parse(xdr.responseText)
      } catch (e) {
        callback && callback(xdr)
      }
      
      if (response) {
        callback && callback(null, response, xdr)
      }
    }

    xdr.onerror = xdr.ontimeout = function() {
      callback && callback(xdr)
    }

    xdr.onprogress = function() {}
    xdr.open(method, url)
    xdr.send(data)
  }

  function xhrRequest (method, url, data, callback) {
    if (typeof(XDomainRequest) !== "undefined") {
      return ie8Request(method, url, data, callback)
    }

    var xhr = new XHR()
    xhr.onreadystatechange = function() {
      var response
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            response = JSON.parse(xhr.responseText)
          } catch (e) {
            callback && callback(xhr)
          }
          if (response) {
            callback && callback(null, response, xhr)
          }
        } else {
          callback && callback(xhr)
        }
      }
    }

    xhr.open(String(method).toUpperCase(), url, true)
    xhr.setRequestHeader("Content-Type", "text/plain")  // avoid pre-flight.
    xhr.send(data)
  }

  return xhrRequest

})