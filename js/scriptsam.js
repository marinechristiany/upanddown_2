//déclaration des variables
 var buttonstart = document.querySelector ('.start button');
var start = document.querySelectorAll ('.start');
var title = document.querySelector ('h2');
var choose = document.querySelector ('.choose');

//ajouter observateur évenements
buttonstart.addEventListener("click",changeecran)




//fonctions
function changeecran()
{
for (i=0; i<start.length ;i++){
    start[i].classList.remove('start')
    start[i].classList.add('hidden')
    console.log(i);
}
    title.classList.add('start-opa');
    choose.classList.add('choose');
    choose.classList.remove('hidden');
    
}

