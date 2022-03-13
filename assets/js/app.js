/*------------------implémentation de la calculatrice en JS--------------------------*/
let ecran = document.getElementById("ecran");       //on récupere dans un objet l'ecran ou le résultat s'affiche
ecran.value = "0";

let btnClic = false;    //le booleen permettant de voir si on doit ecraser la valeur sur l'ecran ou bien concatener la chaine
let typeAct = " ";       //le type d'action à faire, operation +, -, x, /
let arrayBouton = [];   //l'array qui contient tous les boutons

//on boucle pour récuperer les boutons et on ajoute un ecouteur d'évènement pour faire une action précise à l'ecran
for (let i = 0; i < 10; i++) {
    arrayBouton.push(document.getElementById("btn" + i));  
    arrayBouton[i].addEventListener("click", function (e) {
        if (btnClic) {
            ecran.value = " "+ i;
            btnClic = false;
        }
        else
            ecran.value = ecran.value + i;
    }); 
}

//on récupère le bouton comma
arrayBouton.push(document.getElementById("btnComma"));
arrayBouton[10].addEventListener("click",function (e) {     //quand ce bouton est cliqué par l'utilisateur
    let verification = ecran.value;                         
    if (verification.indexOf(".") > 0) {                    //on vérifie si l'expression encours contient un comma
        alert("il y a deja une virgule dans l'expression");
    }
    else{                                                   //sinon on y ajoute 
        ecran.value = ecran.value + ".";
    }
});

arrayBouton.push

