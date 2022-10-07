# Javascript : Training and algorythms

## Lancer les tests

Ouvrez le fichier index.html.
A partir de ce fichier, vous avez la possibilité d'accéder à différents niveaux de difficultés pour la programmation en javascript.
Cliquez sur le lien de votre choix. 
Par exemple, en cliquant sur "Les bases", vous aurez une première série d'exercices de base de javascript. 

Au sein du dépôt, vous avez un dossier 00-bases contenant deux fichiers : 
 - bases.js
 - bases.spec.js

Vous devrez implémenter le code au sein du fichier `base.js` uniquement.

### Activer/désactiver une batterie de tests

Pour activer/désactiver une batterie de tests pour une fonction précise, il faut ajouter/retirer le `x` devant le bloc `describe` correspondant dans le fichier `NOM_SERIE.spec.js`.

Par exemple :
* `describe("Somme de 2 nombres", function () {`
* `xdescribe("Somme de 2 nombres", function () {`

### Activer/désactiver un test spécifique

Pour activer/désactiver un test spécifique, il faut ajouter/retirer le `x` devant le bloc `it` correspondant dans le fichier `NOM_SERIE.spec.js`.

Par exemple :
* `it("1 + 2", function () {`
* `xit("1 + 2", function () {`

*/!\ À l'exception de l'activation et la désactivation de tests, ne pas modifier les fichiers*

## Séries d'exercices

Les exercices sont à faire dans les fichiers `NOM_SERIE.js` où toutes les fonctions sont déjà décrites. Il ne reste plus qu'à coder la logique de chaque fonction.

*/!\ Ne pas modifier la structure du fichier*

### Quelques contraintes

*/!\ Tout ce qui n'est pas explicitement autorisé est interdit*

Il est interdit d'utiliser la moindre fonction de la librairie standard de JavaScript.

L'objectif est d'acquérir les bases de la programmation et d'apprendre à se servir des outils mis à disposition à bon escient, mais aussi de se creuser les méninges et de muscler sa logique.

**Remarque: il n'est pas nécessaire d'être bon en mathématiques** pour réussir les exercices proposés et devenir développeur. **Par contre il est essentiel d'apprendre à faire des recherches** sur Internet pour trouver des solutions et acquérir du savoir.

#### Pour la série `bases`

Il est interdit d'ajouter la moindre ligne de code dans le fichier. Il faut juste remplacer `true` par l'instruction qui fera le travail voulu.

Par exemple :
`return (true);` devient `return (a + b);`

L'utilisation de `Math.PI` est autorisée.

#### Pour la série `conditions`

L'utilisation de `variables` et des structures de contrôle suivantes sont autorisées :
* `if`, `else`, `else if`
* `switch`

#### Pour la série `fonctions`

L'utilisation de `variables` et des structures de contrôle suivantes sont autorisées :
* `if`, `else`, `else if`
* `switch`

#### Pour la série `boucles`

L'utilisation de `variables` et des structures de contrôle suivantes sont autorisées :
* `if`, `else`, `else if`
* `switch`
* `while`

#### Pour la série `tableaux`

L'utilisation de `variables` et des structures de contrôle suivantes sont autorisées :
* `if`, `else`, `else if`
* `switch`
* `while`
* `for`
* Pour les `Array` (tableaux), sont autorisées les propriétés et fonctions suivantes :
  * `length`
  * `pop()`
  * `push()`
  * `slice()`
  * `splice()`
