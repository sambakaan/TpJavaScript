//=====================================================
//======= Function callback 
//=====================================================

var elements = document.getElementsByTagName('li');
for( var i =0; i < elements.length;i++){
	elements[i].addEventListener('click',(function(cpt){
		return function(){
			elements[cpt].style.color = "blue";
			alert(elements[cpt].innerText);
		}
	})(i));
}

//=====================================================
//======= Function immediate : self-invoking 
//=====================================================

(function(w){
	alert(w);
})("tout marche !!!")

//=====================================================
//======= Function Interne : inner
//=====================================================

function multiplication(){
	function mult2(a){
		return a*2;
	}

	function mult3(a){
		return a*3;
	}

	return {
		mult2:mult2,
		mult3:mult3,
	}
}
var f= multiplication();
var rst = f.mult3(100);
console.log(rst);