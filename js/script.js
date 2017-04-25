// VARIABLES
var ecranStart=document.querySelectorAll('.start');
var btn=document.querySelector('.start button');
var ecranChoose=document.querySelector('.choose');
var ecranJeu=document.querySelector('section');

//DETECTEURS D'EVENEMENTS
btn.addEventListener('click', goEcranChoose);


//FONCTION
function goEcranChoose(){
    for (i=0; i<ecranStart.length; i++){
        ecranStart[i].classList.remove('start');
        ecranStart[i].classList.add('hidden');
        ecranChoose.classList.remove('hidden');
        ecranJeu.style.marginTop = "213px";
    
    }
}


