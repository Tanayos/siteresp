const calculette = (function init() {
	'use strict';
function init(){


	document.getElementById("un").addEventListener("click",function un(){

		var chiffre = document.getElementById("un").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + chiffre;
		console.log(chiffre);

	});

		document.getElementById("deux").addEventListener("click",function deux(){
		 	var chiffre = document.getElementById("deux").value;
		 	var valeur = document.getElementById("resultat").value;
		 	document.getElementById("resultat").value = valeur + chiffre;
		});

	document.getElementById("trois").addEventListener("click",function trois(){
		var chiffre = document.getElementById("trois").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + chiffre;

	});
	document.getElementById("quatre").addEventListener("click",function quatre(){
		var chiffre = document.getElementById("quatre").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + chiffre;

	});

	document.getElementById("cinq").addEventListener("click",function cinq(){
		var chiffre = document.getElementById("cinq").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + chiffre;

	});



	 document.getElementById("six").addEventListener("click",function six(){
		var chiffre = document.getElementById("six").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + chiffre;

	});


	document.getElementById("sept").addEventListener("click",function sept(){
		var chiffre = document.getElementById("sept").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + chiffre;

	});

	document.getElementById("huit").addEventListener("click",function huit(){
		var chiffre = document.getElementById("huit").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + chiffre;

	});

	document.getElementById("neuf").addEventListener("click",function neuf(){
		var chiffre = document.getElementById("neuf").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + chiffre;

	});
	document.getElementById("zero").addEventListener("click",function zero(){
		var chiffre = document.getElementById("zero").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + chiffre;

	});
	document.getElementById("virgule").addEventListener("click",function virgule(){
		var chiffre = document.getElementById("virgule").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + chiffre;

	});
	document.getElementById("c").addEventListener("click",function c(){
		document.getElementById("resultat").value = "";

	});
	document.getElementById("egal").addEventListener("click",function egal(){
		var valeur = document.getElementById("resultat").value;
		var resultatFinal = eval(valeur);
		document.getElementById("resultat").value = valeur + " = " + resultatFinal;


	});
	document.getElementById("plus").addEventListener("click",function plus(){
		var chiffre = document.getElementById("plus").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + " " + chiffre + " ";

	});
	 document.getElementById("moins").addEventListener("click",function moins(){
		var chiffre = document.getElementById("moins").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + " " + chiffre + " ";
	});
	 document.getElementById("fois").addEventListener("click",function fois(){
	 	var chiffre = document.getElementById("fois").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + " " + chiffre + " ";
	});
	document.getElementById("divise").addEventListener("click",function divise(){
		var chiffre = document.getElementById("divise").value;
		var valeur = document.getElementById("resultat").value;
		document.getElementById("resultat").value = valeur + " " + chiffre + " ";
	});
 	document.getElementById("suppr").addEventListener("click",function suppr(){
		var valeur = document.getElementById("resultat").value;
		var longueur = valeur.length;
		var fin = longueur - 1;
		if(valeur.charAt(longueur-1 == " ")){
			fin = longueur - 2;
	});
}

	window.onload = init;
}());


//
//
//
// 	valeur = valeur.substring(0, fin);
// 	document.getElementById("resultat").value = valeur;
// }
// arr = []
//
// const bouton = (function init() {
//
// for( var i = 0; i < 10; i++ ) {
// arr[i]= document.getElementById("btn"+i)
// }
// })
