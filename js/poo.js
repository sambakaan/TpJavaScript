//=====================================================
//======= Notion de prototype
//=====================================================
var client1 = {
	nom: "kane",
	prenom: "samba"
}

//console.dir(client1);

// Ajouter un contructeur un object 

var Personne = function (n,p){
	this.nom = n;
	this.prenom = p;
}

var p1 = new Personne('Sall', 'Maman Ale');
var p2 = new Personne('Ndiaye', 'Malick ');


/**
* Ajouter une methode ou propriete de maniere dynamique a un object
* de cette seulle l'objet p1 bénéficie de ces propriété et methode 
**/

p1.classe = "Licence 1 informatique";
p1.getMoyenne = function(){ return 12}


//console.log(p1);
//console.log(p2);



/**
* Maintenant pour ajouter de maniere automatique et dynamique à tous les futurs object 
* il faut le faire au niveau du prototype qui est comme un ADN 
**/
Personne.prototype.admis = function(argument){
	return " oui vous avez réussi";
};


//=====================================================
//======= Notion d'heritage
//=====================================================

var obj1 = function(){
	this.name = "object 1";
	this.toString = function(){
		return this.name;
	}
}


var obj2 = function(){
	this.name = "object 2";
}
obj2.prototype = new obj1();
//obj2.prototype.constructor = obj2;

var obj = new obj2();
console.log(obj.toString());

