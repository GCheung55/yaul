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

module.exports = XHR
