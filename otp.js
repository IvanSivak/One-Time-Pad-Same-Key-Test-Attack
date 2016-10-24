//www.ivansivak.net
// One Time Pad
var otp = (function(){
	//https://en.wikipedia.org/wiki/Most_common_words_in_English
	var guessDictionary = ['Hello', 'the', 'be', 'to', 'in', 'that', 'have', 'for', 'with'];
  
  var expandKey = function (k, l){
    if (l < k.length) return k.substr(0, l);
    var ceil = Math.ceil(l / k.length),
        res = '';
    for (var i = 0; i < ceil; i++) res += k;
    return res.substr(0, l);
  };
  
  var encrypt = function (m, k){
    var cipher = '',
        key = expandKey(k, m.length);
    for (var i = 0; i < m.length; i++){
      cipher += String.fromCharCode(m.charCodeAt(i) ^ key.charCodeAt(i));
    }
    return cipher;
  };
  
  var xor = function (c1, c2) {
    var cipher = ''
    for (var i = 0; i < c1.length; i++){
      cipher += String.fromCharCode(c1.charCodeAt(i) ^ c2.charCodeAt(i));
    }
    return cipher;
  };
  
  return {
  	guessDictionary: guessDictionary,
  	encrypt: encrypt,
    xor: xor
  }
})();
