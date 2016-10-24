var key = 'secret';
var cipher1 = otp.encrypt('Hello World', key);
var cipher2 = otp.encrypt('This is a test', key);
var ciphersXor = otp.xor(cipher1, cipher2);

console.log('Does any of these resemble any real english word?', '\n', '----------');
otp.guessDictionary.forEach(function(v, i, a){
	console.log(otp.xor(ciphersXor, v));
});
console.log('----------');
console.log('if yes, then the ciphers are encrypted by the same key and cipher is broken.');
