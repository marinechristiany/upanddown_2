// VARIABLES
var ecranStart=document.querySelectorAll('.start');
var btn=document.querySelector('.start button');
var ecranChoose=document.querySelector('.choose')

//DETECTEURS D'EVENEMENTS
btn.addEventListener('click', goEcranChoose);


//FONCTION
function goEcranChoose(){
    for (i=0; i<ecranStart.length; i++){
        ecranStart[i].classList.add('.hidden')
    
    }
}


