// Inverser le signe de tous les éléments négatifs du tableau et le retourner.
function inverserSigne(tableau) {
    return tableau.map(a => {
            if (a < 0) {
                return a = -(a);
            } else{
                return a =a;
            }
        });

    // return tableau.map(Math.abs);
};

// Calculer et retourner la somme des nombres contenus dans le tableau.
function somme(tableau) {
    const sum = tableau.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
};

// Compter le nombre d'éléments négatifs contenus dans le tableau.
function compterNegatifs(tableau) {
    var counter = [0];
    tableau.forEach(a => {
    if (a < 0){
        counter[0]++;
    }
  });
  return Number(counter);
};

// Créer et retourner un tableau qui contient les nombres de 1 à n.
function nNombres(n) {
    const bigArray = [];

    for (let i = 0; i < n; i++) {
    bigArray[i] = i + 1;
    }

    return bigArray;
};

// Créer et retourner un tableau qui contient les nombres de 1 à n
// dans l'ordre décroissant.
function nNombresDecroissant(n) {
    let decroissant = nNombres(n).sort((a,b) => b-a);
    return decroissant;
};

// Créer et retourner un tableau qui contient les nombres impairs de 1 à n.
// Un nombre impair est un nombre qui n'est pas divisible par 2.
function nNombresImpairs(n) {
    const odds = nNombres(n).filter(number => {
        return number % 2 !== 0;
    });

    return odds;
};

// Créer et retourner un tableau qui contient les nombres multiples de 5
// dans l'intervalle de 1 à n.
function nNombresMultiplesDe5(n) {
    const timesFive = nNombres(n).filter(number => {
        return number % 5 == 0;
    });

    return timesFive;
};

// Créer et retourner un tableau qui contient les nombres multiples de n
// dans l'intervalle de de 1 à 100.
function nombresMultiplesDeN(n) {
    const timesN = nNombres(100).filter(number => {
        return number % n == 0;
    });

    return timesN;
};

// Vérifier que chaque élément du tableau est unique
// et retourner vrai si c'est le cas, sinon faux.
function unique(tableau) {
    function areDistinct(tableau)
    {
        let n = tableau.length;
     
        // Put all array elements in a map
        let s = new Set();
        for (let i = 0; i < n; i++) {
            s.add(tableau[i]);
        }
     
        // If all elements are distinct, size of
        // set should be same array.
        return (s.size == tableau.length);
    }
     
    // Driver code
     
        if (areDistinct(tableau)) {
            return true;
        }
        else {
            return false;
        }
};

// Inverser les éléments du tableau reçu en paramètre et le retourner.
function inverser(tableau) {
    tableau = tableau.reverse();
    return tableau;
};

// Rechercher et retourner le plus grand nombre contenu dans le tableau.
function max(tableau) {
 return Math.max(...tableau);
};

// Rechercher et retourner le plus petit nombre contenu dans le tableau.
function min(tableau) {
    return Math.min(...tableau);
};

// Rechercher et retourner la position du plus grand nombre contenu dans le tableau.
function positionMax(tableau) {
    return tableau.indexOf(max(tableau));
};

// Rechercher et retourner la position du plus petit nombre contenu dans le tableau.
function positionMin(tableau) {
    return tableau.indexOf(min(tableau));
};

// Vérifie si les nombres du tableau sont triés dans l'ordre croissant.
function ordreCroissant(tableau) {
    return tableau.every(function (x, i) {
        return i === 0 || x >= tableau[i - 1];
    });
};
