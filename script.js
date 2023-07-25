
function openOnglet(evt , name){

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for(i = 0 ; i < tabcontent.length ; i++){
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for(i = 0 ; i < tablinks.length ; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(name).style.display = "block" ;
    evt.currentTarget.className += " active";
}



// -------------   TOP CHRONO  -------------

// VARIABLES
let sp, btn_start, btn_stop, t, ms, s, mn, h;

// FONCTIONS
window.onload = function(){
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stopbtn_stop');
    t;
    ms=0, s=0, mn=0, h=0;
}

// MISE EN PLACE DU CHRONO
function update_chrono(){
    ms+=1;
    if(ms == 10){
        ms=1
        s+=1
    }
    if(s == 60){
        s=0
        mn += 1
    }
    if(mn == 60){
        mn=0
        h+=1
    }
    // insertion des valeurs dans les spans 
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

// FUNCTION BTN START
function start(){
    t = setInterval(update_chrono, 100);
    btn_start.disabled = true;
}

// FONCTION BTN STOP
function stop(){
    clearInterval(t);
    btn_start.disabled = false;
}

// FONCTION BTN RESET
function reset(){
    clearInterval(t);
    btn_start.disabled = false ;
    ms = 0, s = 0, mn = 0, h = 0;
    // insertion des valeurs dans les spans 
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}


// -------------   TO DO LIST  -------------

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.onclick = function(){
    // Vérifier si l'input n'est pas vide
    if(inputField.value != ""){
        // Si l'input n'est pas vide, créer un paragraphe
        var paragraphe = document.createElement('p')
    }
    // valoriser ce paragraphe avec le contenu de l'input
    paragraphe.innerText = inputField.value;

    // styliser le paragraphe
    paragraphe.classList.add('paragraphe_style');

    // insérer le paragraphe dans l'élément to DoContainer
    toDoContainer.appendChild(paragraphe);

    // vider l'input quand le paragraphe est ajouté
    inputField.value = "";

    // barrer le paragraphe lorsque l'on clique dessus
    paragraphe.addEventListener('click', function(){
        if(paragraphe.classList.contains("paragraphe_click")){
            toDoContainer.removeChild(paragraphe); 
        } else {
            paragraphe.classList.add('paragraphe_click');
        }
    })

}

