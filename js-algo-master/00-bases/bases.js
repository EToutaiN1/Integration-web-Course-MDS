function somme2Nombres(nombre1, nombre2) {
  return (nombre1 + nombre2);
};

// Calculer la moyenne de 2 nombres donnés
function moyenne2Nombres(nombre1, nombre2) {
  return ((nombre1 + nombre2) / 2 );
};

// Calculer l'aire d'un triangle dont on connait la base et la hauteur
function aireTriangle(base, hauteur) {
  return ((base * hauteur) / 2 );
};

// Calculer la circonférence d'un cercle dont on connait le rayon
function circonferenceCercle(rayon) {
  return (Math.PI*rayon*2);
};

// Calculer l'aire d'un cercle dont on connait le rayon
function aireCercle(rayon) {
  return (Math.PI*rayon*rayon);
};

// Calculer la TVA (20%) à partir du prix hors TVA d'un produit
function tva(prixHT) {
  return (prixHT*0.2);
};

// Je place un montant (capital) à la banque pendant 1 an.
// Calculer les intérêts que je toucherai. Le taux est de 2%.
function interets(capital) {
  return (capital * 0.02);
};

// Je place un montant (capital) à la banque pendant 1 an.
// Calculer le nouveau capital (capital de départ + intérêts).
function placement(capital, tauxInteret) {
  return (capital * (1 + tauxInteret/100));
};

// Calculer le montant total d'une facture dont on connait
// le prix unitaire hors TVA, la quantité de produits et le taux de TVA.
function prixTTC(prixUnitaireHT, quantite, tauxTVA) {
  return (prixUnitaireHT * quantite + (prixUnitaireHT * quantite * (tauxTVA/100)));
};

// Calculer la durée (en secondes) d'un trajet dont on connait
// la vitesse moyenne (en m/s == mètres par seconde) et la distance (en km).
function dureeTrajet(vitesseMoyenne, distance) {
  return (distance*1000/vitesseMoyenne);
};

// Calculer le nombre de secondes écoulées depuis minuit
function secondes(heure, minute, seconde) {
  return (heure*3600 + minute * 60 + seconde);
};