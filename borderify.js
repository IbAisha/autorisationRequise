{
    age = prompt("Quel est votre date de naissance?","JJ/MM/AAAA");
    console.log(age);
    var jour = age.substring(0,2);
    var mois = age.substring(3,5);
    var annee = age.substring(6,10);

    function getAge(date) { 
        var diff = Date.now() - date.getTime();
        var agee = new Date(diff); 
        return(agee.getUTCFullYear() - 1970);
    }
    age = getAge(new Date(annee, mois, jour)); //Date(année, mois, jour) 

    console.log(age);
    
   if (age<18) {
        alert("Vous n'avez pas l'âage requis");
        window.location.reload();
    }
    if (isNaN (age)) {
        alert('NON');
        window.location.reload();
    }
    if (age<0) {
        alert('IMPOSSIBLE')
        window.location.reload();
    }
}

