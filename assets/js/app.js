/*------------------implémentation de la calculatrice en JS--------------------------*/

/*----------------------------------------implémentation des boutons de bases---------------------------------*/
let ecran = document.getElementById("ecran");       //on récupere dans un objet l'ecran ou le résultat s'affiche
ecran.value = "0";

let btnClic = false;    //le booleen permettant de voir si on doit ecraser la valeur sur l'ecran ou bien concatener la chaine
let typeAct = " ";       //le type d'action à faire, operation +, -, x, /
let arrayBouton = [];   //l'array qui contient tous les boutons
let number1 = 0;
let number2 = 0;

//on boucle pour récuperer les boutons et on ajoute un ecouteur d'évènement pour faire une action précise à l'ecran
for (let i = 0; i < 10; i++) {
    arrayBouton.push(document.getElementById("btn" + i));  
    arrayBouton[i].addEventListener("click", function (e) {
        if (btnClic) {
            ecran.value = ""+ i;
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
//lorsque l'utilisateur voudrais quitter le programme
arrayBouton.push(document.getElementById("btnExit"));
arrayBouton[11].addEventListener("click",function (e) {
    //en cours d'implémentation
});

/*---------------------------------------------------implémentation des opérations------------------------------------------*/
//pour l'addition
arrayBouton.push(document.getElementById("btnAdd"));
arrayBouton[12].addEventListener("click",function (e) {
    number1 = ecran.value;
    typeAct = "+";
    btnClic = true;    
});

//pour la soustraction
arrayBouton.push(document.getElementById("btnSous"));
arrayBouton[13].addEventListener("click",function (e) {
    number1 = ecran.value;
    typeAct = "-";
    btnClic = true;    
});

//pour la division
arrayBouton.push(document.getElementById("btnDiv"));
arrayBouton[14].addEventListener("click",function (e) {
    number1 = ecran.value;
    typeAct = "/";
    btnClic = true;    
});

//pour la multiplication
arrayBouton.push(document.getElementById("btnProd"));
arrayBouton[15].addEventListener("click",function (e) {
    number1 = ecran.value;
    typeAct = "x";
    btnClic = true;    
});

// pour la fonction reset
arrayBouton.push(document.getElementById("btnReset"));
arrayBouton[16].addEventListener("click",function (e) {
    ecran.value = "0";    
});

//pour la fonction result
arrayBouton.push(document.getElementById("btnResult"));
arrayBouton[17].addEventListener("click",function (e) {
    let result =0;
    console.log(typeAct);
    number2 = ecran.value;
    switch (typeAct) {
        case "+":
            result = Number(number1) + Number(number2);
            ecran.value = result;
            break;
        case "-":
            result = number1 - number2;
            ecran.value = result;
            break;
        case "/":
            if (number2 == 0) {
                alert("maths error");
                return;
            }
            result = number1 / number2;
            ecran.value = result;
            break;
        case "x":
            result = number1 * number2;
            ecran.value = result;
            break;
    }
});

