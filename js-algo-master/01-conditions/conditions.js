// Recherche et retourne le nombre le plus grand
function maximum2Nombres(nombre1, nombre2) {
    return (nombre1 > nombre2) ? nombre1 : nombre2;
};

// Recherche et retourne le nombre le plus grand
function maximum3Nombres(nombre1, nombre2, nombre3) {
    if (nombre1 > nombre2 & nombre1 > nombre3) {
        return nombre1;
    } else if (nombre2 > nombre1 & nombre2 > nombre3) {
        return nombre2;
    } else if (nombre3 > nombre1 & nombre3 > nombre2) {
        return nombre3;
    } else {
        return 0;
    }
};

// Indique si le nombre est positif, négatif ou nul (== 0)
function signe(nombre) {
    if (nombre > 0) {
        return "positif";
    } else if (nombre < 0) {
        return "négatif";
    } else {
        return "nul";
    }
};

// Selon le nombre de côtés de même longueur,
// indique si un triangle est équilatéral, isocèle ou quelconque.
function typeTriangle(cote1, cote2, cote3) {
    // Check for equilateral triangle
    if (cote1 == cote2 && cote2 == cote3) {
        return "équilatéral";}
    // Check for isosceles triangle
    else if (cote1 == cote2 || cote2 == cote3 || cote3 == cote1) {
        return "isocèle";}
    // Otherwise scalene triangle
    else {
        return "quelconque";
}
};

// Indique le nombre de valeurs identiques
function valeursIdentiques(nombre1, nombre2, nombre3) {
    if (nombre1 == nombre2 && nombre2 == nombre3) {
        return 3;
    }
    else if (nombre1 == nombre2 || nombre2 == nombre3 || nombre3 == nombre1) {
        return 2;
    }
    else {
        return 0;
    }
};

// Selon le numéro choisi, indique le jour de la semaine correspondant
// en toutes lettres.
function jourDeLaSemaine(numeroJour) {

    let jourDeLaSemaine = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];
    let number = numeroJour-1;

    if (number > 7 || number < 0) {
        return 'erreur';
    } else {
        return jourDeLaSemaine[number];
    }
    

}

// Selon le mois renseigné, indiquer le nombre de jours qu'il y a dans ce mois.
function nombreJours(mois) {
    let lgMois = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
    let numberOfTheMonth = lgMois[mois-1];

    return Number(numberOfTheMonth); 
};

// Retourne vrai si le premier nombre est dans l'intervalle des deux suivants.
function intervalle(nombre1, nombre2, nombre3) {
    return (nombre1 < nombre2 && nombre1 > nombre3) || (nombre1 > nombre2 && nombre1 < nombre3);
};

// Un magasin de photocopies facture 0,10 € les dix premières photocopies,
// 0,09 € les vingt suivantes et 0,08 € au-delà.
// Retourne le prix total en fonction du nombre de photocopies.
function prixPhotocopies(nombrePhotocopie) {
    let price = 0.10;

    if (nombrePhotocopie <= 10) {
		price = nombrePhotocopie * price ;
        return price;
	} else if (nombrePhotocopie>=10 && nombrePhotocopie <= 30) {
		price = 1 + (0.09 * (nombrePhotocopie - 10));
        return price;
	} else {
		price = 1 + 1.8 + (0.08 * (nombrePhotocopie - 30));
        return price;
	}

};

// Dans une rue où se pratique le stationnement alternatif,
// du 1 au 15 du mois on se gare du côté des maisons ayant un numéro impair,
// et le reste du mois on se gare de l’autre côté.
// La fonction retourne vrai si l'on s'est garé du bon côté de la rue.
function stationnementAlternatif(jour, numeroMaison) {
    if (jour <= 15 && numeroMaison % 2 == 1){
        return true;
    } else if (jour > 15 && numeroMaison % 2 == 0) {
        return true;
    } else {
        return false;
    }
    ;
    
};
