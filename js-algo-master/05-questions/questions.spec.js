'use strict';

describe('Les chaines de caractères : ', function () {

    it('Donner la taille de la chaine de caractères', function () {
        var result = tailleString('Ce texte à une certaine taille');
        expect(result).toEqual(30);
    });

    it('Remplacer le premier e de la chaine par un espace', function () {
        var result = remplaceCar('Ce texte à une certaine taille','e', ' ');
        expect(result).toEqual('C  texte à une certaine taille');
    });

    it('Concatener les deux chaines de caractères', function () {
        var result = concatString('Le javascript est ', 'super');
        expect(result).toEqual('Le javascript est super');
    });

    it('Afficher le cinquième caractère de la chaine', function () {
        var result = afficherCar('Ces exercices sont super!', 5);
        expect(result).toEqual('e');
    });

    it('Afficher les 9 premiers caractères', function () {
        var result = afficherNCar('Je dirait même qu\'ils sont excellent',9);
        expect(result).toEqual('Je dirait');
    });

    it('Mettre en majuscule la chaine', function () {
        var result = majusculeString('Un autre excellent exercice');
        expect(result).toEqual('UN AUTRE EXCELLENT EXERCICE');
    });

    it('Supprimer les espaces avant et après la chaine', function () {
        var result = SupprEspaceString(' Rome ne s\'est pas construite en un jour ');
        expect(result).toEqual('Rome ne s\'est pas construite en un jour');
    });
    it('Afficher true si le parametre d\'entrée de la fonction est de type string', function () {
        var result = IsString('Est ce une chaine de caractères ?');
        expect(result).toEqual(true);
    });
    it('Afficher l\'extension du fichier', function () {
        var result = AfficherExtensionString('images/photo01.jpg');
        expect(result).toEqual('jpg');
    });
    it('Compter le nombre d\'espace dans la chaine', function () {
        var result = NombreEspaceString('Sire ouvrez on en a gros!');
        expect(result).toEqual(5);
    });
    it('Inverser une chaine de caractères', function () {
        var result = InverseString('Après demain, à partir d\'aujourd\'hui?');
        expect(result).toEqual('?iuh\'druojua\'d ritrap à ,niamed sèrpA');
    });
    it('Mettre en minuscule la chaine', function () {
        var result = minusculeString('Celui ci aussi!');
        expect(result).toEqual('celui ci aussi!');
    });
    it('Comptez le nombre de caractères différents dans la chaine', function(){
        var result = countDistinctCar('La maison de carole a vue sur le parc du Thabor');
        expect(result).toEqual(19);

    });
})
describe('Les nombres et opérations mathématiques : ', function () {
    it('Calculer la puissance d\'un nombre par rapport à un autre (x à la puissance y)', function () {
        var result = calculPuissance(2, 3);
        expect(result).toEqual(8);
    });
    it('Afficher la valeur absolue d\'un nombre', function () {
        var result = valeurAbsolue(-5);
        expect(result).toEqual(5);
    });
    it('Afficher les valeurs absolues de plusieurs nombres', function () {
        var result = valeurAbsolueArray([-5,-50,-25,-568]);
        expect(result).toEqual([5,50,25,568]);
    });
    it('Calculer la surface d\'un cercle en fonction de son rayon. L\'arondir à l\'entier le plus proche', function () {
        var result = sufaceCercle(5);
        expect(result).toEqual(79);
    });
    it('Calculer l\'hypthènuse d\'un triangle rectangle', function () {
        var result = hypothenuse(5, 8);
        expect(result).toEqual(9.433981132056603);
    });
    it('Calculer l\'IMC (Poids / (taille x taille).Ne garder que deux chiffres après la virgule.', function () {
        var result = calculIMC(65, 1.75);
        expect(result).toEqual(21.22);
    });
})
describe('Les tableaux :', function() {
    it('Créer un tableau "langages" contenant "Html", "CSS", "Java", "PHP"', function () {
        var langages = CreationTableauLangages();
        expect(langages).toEqual(["Html","CSS","Java","PHP"]);
    });
    it('Créer un tableau "nombres" contenant les nombres de 0 à 5', function () {
        var nombres = CreationTableauNombres();
        expect(nombres).toEqual([0,1,2,3,4,5]);
    });
    it('Remplacer le troisième élément du tableau par "Javascript"', function () {
        var langages = ["Html","CSS","Java","PHP"];
        var langages = RemplacementElement(langages);
        expect(langages).toEqual(['Html', 'CSS', 'Javascript', 'PHP']);
    });
    it('Ajouter "Ruby" et "Python" à la fin du tableau', function () {
        var langages = ['Html', 'CSS', 'Javascript', 'PHP'];
        var langages = AjoutElementLangages(langages);
        expect(langages).toEqual(['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);
    });
    it('Ajouter "-2" et "-1" au début du tableau nombres', function () {
        var nombres = [0,1,2,3,4,5];
        var nombres = AjoutElementNombres(nombres);
        expect(nombres).toEqual([-2,-1,0,1,2,3,4,5]);
    });
    it('Supprimer le premier élément du tableau langages', function () {
        var langages = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
        var langages = SuppressionPremierElement(langages);
        expect(langages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby', 'Python']);
    });
    it('Supprimer le dernier élément du tableau langages', function () {
        var langages = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
        var langages = SuppressionDernierElement(langages);
        expect(langages).toEqual(['CSS', 'Javascript', 'PHP', 'Ruby']);
    });
    it('Faire de la chaîne "reseaux_sociaux_chaine" un tableau "reseaux_sociaux"', function () {
        var reseaux_sociaux_chaine = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
        var reseaux_sociaux = ConversionChaineTableau(reseaux_sociaux_chaine);
        expect(reseaux_sociaux).toEqual(['Facebook','Twitter', 'Google +','Viadeo','LinkedIn']);
    });
    it('Faire du tableau "langages" une chaîne "langages_chaine". Séparer les langages par une virgule', function () {
        var langages = ['CSS', 'Javascript', 'PHP', 'Ruby'];
        var langages_chaine = ConversionTableauChaine(langages);
        expect(langages_chaine).toEqual("CSS,Javascript,PHP,Ruby");
    });
    it('Trier le tableau "reseaux_sociaux"', function () {
        var reseaux_sociaux = ['Facebook','Twitter', 'Google +','Viadeo','LinkedIn'];
        var reseaux_sociaux = TriTableau(reseaux_sociaux);
        expect(reseaux_sociaux).toEqual(['Facebook','Google +','LinkedIn','Twitter','Viadeo']);
    });
    it('Inverser le tableau "langages"', function () {
        var langages = ['CSS','Javascript','PHP','Ruby'];
        var langages = InversionTableau(langages);
        expect(langages).toEqual(["Ruby", "PHP", "Javascript", "CSS"]);
    });
    it('Ordonnez le table "languages" en fonction du nombre de caractères présents dans la chaine', function() {
        var langages = ['C#','Javascript','PHP','Ruby'];
        var langages = TriSpecial(langages);
        expect(langages).toEqual(["C#", "PHP", "Ruby", "Javascript"]);
    });
})
