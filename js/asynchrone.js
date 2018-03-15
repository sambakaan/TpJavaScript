//=====================================================
//======= La programmation Asynchrone
//======= Le callback Hell ou Pyramid of doom
//====== Les promesses
//=====================================================

var a, b;

setTimeout(function(){
	console.log('set a ');
	a = 10;
},1000)


setTimeout(function(){
	console.log('set b');
	b=20;
},2000)

var c = a + b;

console.log(c);