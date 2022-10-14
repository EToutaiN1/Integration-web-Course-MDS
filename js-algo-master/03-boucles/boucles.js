// Calculer et retourner la factorielle de n.
// Par convention, factorielle(0) == 1.
function factorielle(n) {
    // la factorielle d'un entier naturel n est le produit des nombres entiers strictement positifs inférieurs ou égaux à n.

    let i, n, factor = 1;
    for(i = 1; i <= n; i++)  
    {
        factor *= i;   // ou f *= i;
    }  
    return factor;
};

// Vérifier si un le nombre donné est un nombre premier.
// Si oui, retourner vrai, sinon faux.
// Un nombre premier est un nombre divisible uniquement par 1 et par lui-même.
function nombrePremier(nbr) {

    // Loop from 2 to square root of n
    for (let i = 2; i <= Math.sqrt(nbr); i++) 
        // If i is a divisor of n, n is not prime
        if (nbr % i == 0) return false;

    return true;

};

// Multiplier 2 nombres sans utiliser la multiplication et retourner la réponse.
function multiplier(nombre1, nombre2) {

    let resultat = 0;
    let nb_fois = nombre1;
    let nombre = nombre2;

    if (nombre1 < 0 && nombre2 < 0) {
        // If both are negative, result will be positive
        nb_fois = Math.abs(nombre1);
        nombre = Math.abs(nombre2);
    }
    else if (nombre1 < 0) {
        // inverse the variables for the following loop.
        nb_fois = nombre2;
        nombre = nombre1;
    }
    for (i = nb_fois; i > 0; i = i - 1) {
        resultat = nombre + resultat;
    }
    return resultat;

};

// Calculer et retourner le miroir d'un nombre. Le miroir d'un nombre est obtenu
// en lisant le nombre à l'envers.
// Par exemple, le miroir de 4209 est 9024.
function miroir(nombre) {
    let miror = String(nombre).split('').reverse().join('');
    miror = Number(miror);
    return miror;
};
