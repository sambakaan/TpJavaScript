//=====================================================
//======= Function callback 
//=====================================================

var elements = document.getElementsByTagName('li');
for( var i =0; i < elements.length;i++){
	elements[i].addEventListener('click',(function(cpt){
		return function(){
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