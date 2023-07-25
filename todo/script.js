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