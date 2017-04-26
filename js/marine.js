// Déclaration des variables
	var btnStart = document.querySelector('.start button');
	var startClass = document.querySelectorAll('.start');
	console.log(typeof startClass);

// Ecouteur d'évenements
	btnStart.addEventListener('click',startClick);


// FONCTIONS
	function startClick(){
		for(i=0; i<startClass.length; i++){
			startClass[i].classList.add("hidden");
			startClass[i].classList.remove("start");
		}

	}