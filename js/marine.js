// Variables des ecrans
	var btnStart = document.querySelector('.start button');
	var startClass = document.querySelectorAll('.start');
	var startTitle = document.querySelector('h2');
	var footerSubtitle = document.querySelector('footer .subtitle');
	var chooseScreen = document.querySelector('.choose');
	var looseScreen = document.querySelector('.loose');
	var winScreen = document.querySelector('.won');
	var highScreen = document.querySelector('.high');
	var lowScreen = document.querySelector('.low');
	var winPlayAgain = document.querySelector('.won button');
	var loosePlayAgain = document.querySelector('.loose button');
	var phantomLife = document.querySelectorAll('.phantom');
	var style = window.getComputedStyle(phantomLife[0], false);
	var positionLeft = parseInt(style.backgroundPositionX);
	var drapeau = 0;


// Variables pour jouer
	var theInput = document.querySelectorAll('input');
	var computerNumber = Math.floor(Math.random()*101);
	console.log(computerNumber);
	var userShots = 0;
	var position = 0;

// Ecouteur d'évenements
	btnStart.addEventListener('click',startClick);
	winPlayAgain.addEventListener('click', playAgain);
	loosePlayAgain.addEventListener('click', playAgain);

	for(i=0; i<phantomLife.length; i++){
		phantomLife[i].style.backgroundPositionX = positionLeft+"px";
	}
	
	for(i=0; i<theInput.length; i++){
			theInput[i].addEventListener("keypress", enterPressed);
	}



// FONCTIONS
	function startClick(){
		for(i=0; i<startClass.length; i++){
			startClass[i].classList.add("hidden");
			startClass[i].classList.remove("start");
		}

		startTitle.classList.add('start-opa');
		chooseScreen.classList.add('choose');
		chooseScreen.classList.remove('hidden');
		startTitle.classList.add('start-opa');
		chooseScreen.classList.add('choose');
		chooseScreen.classList.remove('hidden');
		footerSubtitle.classList.add('subtitle');
		footerSubtitle.classList.remove('hidden');

	}


	// TEST ENTER

    function enterPressed(e){

        if(e.keyCode === 13){
        	
        	for(i=0; i<phantomLife.length; i++){
        		
        		phantomLife[i].style.backgroundPositionX = parseInt(phantomLife[i].style.backgroundPositionX)+ 48 +"px";
        		
        	}

            var userNumber = parseInt(theInput[position].value);
            console.log(userNumber);

            if( userShots<8 ){
				
				if(userNumber>=0 && userNumber<=100){

					if(userNumber===computerNumber){
						chooseScreen.classList.remove('choose');
						chooseScreen.classList.add('hidden');
						winScreen.classList.add('won');
						winScreen.classList.remove('hidden');
						highScreen.classList.add('hidden');
						highScreen.classList.remove('high');
						lowScreen.classList.remove('low');
						lowScreen.classList.add('hidden');


					} else if(userNumber<computerNumber) {
						chooseScreen.classList.remove('choose');
						chooseScreen.classList.add('hidden');
						highScreen.classList.add('high');
						highScreen.classList.remove('hidden');
						lowScreen.classList.remove('low');
						lowScreen.classList.add('hidden');
						userShots++;
						position = 2;

					} else if(userNumber>computerNumber) {

						chooseScreen.classList.remove('choose');
						chooseScreen.classList.add('hidden');
						highScreen.classList.add('hidden');
						highScreen.classList.remove('high');
						lowScreen.classList.add('low');
						lowScreen.classList.remove('hidden');
						userShots++;
						position = 1;
					}

				} else{
					alert("You haven't enter a number between 0 and 100 !");
				}

			} else {
		        chooseScreen.classList.remove('choose');
				chooseScreen.classList.add('hidden');
		        looseScreen.classList.add('loose');
				looseScreen.classList.remove('hidden');
				highScreen.classList.add('hidden');
				highScreen.classList.remove('high');
				lowScreen.classList.remove('low');
				lowScreen.classList.add('hidden');
			
	        }
	    }
	}



	function playAgain (){
		position = 0;
		userShots = 0;
		computerNumber =  Math.floor(Math.random()*101);
		console.log(computerNumber);
		chooseScreen.classList.add('choose');
		chooseScreen.classList.remove('hidden');
		looseScreen.classList.add('hidden');
		looseScreen.classList.remove('loose');
		highScreen.classList.add('hidden');
		highScreen.classList.remove('high');
		lowScreen.classList.remove('low');
		lowScreen.classList.add('hidden');
		winScreen.classList.remove('won');
		winScreen.classList.add('hidden');

		for(i=0; i<theInput.length; i++){
			theInput[i].value = "";
	}

		for(i=0; i<phantomLife.length; i++){
			phantomLife[i].style.backgroundPositionX = positionLeft+"px";
		}
	}
