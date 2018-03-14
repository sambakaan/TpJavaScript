//=====================================================
//======= Notion de promise
//=====================================================
var a;
var b;
var p1 = new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log("set a");
		a = 290;
		resolve(a);
	},2000);
});


var p2 = new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log("set b");
		b = 150;
		resolve(a);
	},3000);
});

/*p1.then(function(a){
	console.log("after "+a)
});*/

var arr =[p1,p2];
Promise.all(arr).then(function(resultat){
	var c = resultat[0] + resultat[1];
	console.log(c);
});

