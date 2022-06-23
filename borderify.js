{

    age = prompt("Quel est votre âge","Entrez votre âge");
    
    if (age<18) {
        alert("Vous n'avez pas l'âage requis");
        window.location.reload;
    }
    if (isNaN (age)) {
        alert('NON');
        window.location.reload;
    }
}

