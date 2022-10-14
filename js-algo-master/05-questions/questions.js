/**
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieur façon de faire.
 */

 function tailleString(texte) {
    return texte.length;
  }
  
function remplaceCar(texte, i, replaceText) {

    // let newStringArray = texte.split("");
 
    // i = replaceText;

    // let newString = newStringArray.join("");

    // return newString;

    let firstPart =texte.substr(0, i);
            
    let lastPart =texte.substr(i + 1);

    let newString = firstPart + replaceText + lastPart;
    
    return newString;
} 

function concatString(texte) {
    
}

function afficherCar(texte) {
    
}

function afficherNCar(texte) {
    
}

function majusculeString(texte) {
    
}

function SupprEspaceString(texte) {
    
}

function IsString(texte) {
    
}

function AfficherExtensionString(texte) {
    
}

function NombreEspaceString(texte) {
    
}

function InverseString(texte) {
    
}

function minusculeString(texte) {
    
}

function countDistinctCar(texte) {
    
}