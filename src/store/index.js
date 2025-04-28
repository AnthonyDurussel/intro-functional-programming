import { createStore } from "redux";

// Initial state
const initialState = {
  currentSlide: 0,
  slides: [
    {
      id: 1,
      title: "🚀 Introduction à la programmation fonctionnelle",
      content: `
        <p>Et si je vous disais que vous utilisez déjà la programmation fonctionnelle sans même le savoir ?</p>
    <p>Des fonctions comme <code>map()</code>, <code>filter()</code> ou <code>reduce()</code> font partie de votre quotidien, mais vous n'avez peut-être jamais remarqué qu'elles reposent sur un paradigme révolutionnaire.</p>
    <p>La programmation fonctionnelle n'est pas une mode – c'est un changement de perspective qui pourrait rendre votre code plus fiable, plus rapide et plus facile à maintenir. Prêt à explorer ce que vous utilisez déjà sans le savoir ?</p>
`,
    },
    {
      id: 2,
      title: "🧪 Fonctionnelle vs Impérative : Qu'est-ce qui change vraiment ?",
      content: `
        <p>Vous avez probablement utilisé ces deux paradigmes sans même y penser. Mais quelle est la vraie différence entre eux ? Regardons de plus près.</p>
        
        <h3>📜 Programmation Impérative :</h3>
        <p>Dans ce modèle, vous devez décrire <strong>comment</strong> chaque étape doit être effectuée. Vous manipulez directement les données et contrôlez leur état au fur et à mesure.</p>
        <p>Exemple : Filtrer les adultes d'une liste de personnes.</p>
        <pre>
    let personnes = [
      { nom: "Alice", age: 30 },
      { nom: "Bob", age: 17 },
      { nom: "Charlie", age: 21 }
    ];
    let adultes = [];
    for (let i = 0; i < personnes.length; i++) {
      if (personnes[i].age >= 18) {
        adultes.push(personnes[i]);
      }
    }
    console.log(adultes);
        </pre>
        <p><strong>Problème :</strong> L'état de la liste est modifié au fur et à mesure, et la logique est impérative, donc le code peut devenir difficile à maintenir et à comprendre.</p>
    
        <h3>⚡ Programmation Fonctionnelle :</h3>
        <p>Ici, vous vous concentrez sur <strong>ce que</strong> vous voulez accomplir, pas sur <strong>comment</strong>. Utilisez des fonctions comme filter() pour créer une nouvelle liste, sans changer l'originale.</p>
        <pre>
    const personnes = [
      { nom: "Alice", age: 30 },
      { nom: "Bob", age: 17 },
      { nom: "Charlie", age: 21 }
    ];
    const adultes = personnes.filter(personne => personne.age >= 18);
    console.log(adultes);
        </pre>
        <p><strong>Avantage :</strong> La logique est plus concise et plus claire. Aucun changement d'état, juste une transformation des données. Le code est plus lisible et testable.</p>
      `,
    },
    {
      id: 3,
      title: "🧪 Quelques Principes de base",
      content: `
        <p><strong>1. Immutabilité des données</strong></p>
        <p>Les données sont immuables : une fois créées, elles ne peuvent plus être modifiées. Cela empêche les effets de bord et rend le code plus prévisible.</p>
        
        <p><strong>2. Fonctions pures</strong></p>
        <p>Une fonction pure retourne toujours le même résultat pour les mêmes arguments et n'a pas d'effets secondaires. Cela simplifie les tests et garantit un comportement fiable.</p>
    
        <p><strong>3. Fonctions d'ordre supérieur</strong></p>
        <p>Les fonctions d'ordre supérieur sont des fonctions qui prennent une ou plusieurs fonctions en argument, ou retournent une fonction en résultat.</p>
      `,
      code: "",
    },
    {
      id: 4,
      title: "🧩 Immutabilité",
      content: `
      <p>Qu'est-ce que l'immutabilité ?

<li>Une structure immutable ne peut pas être modifiée après sa création.</li>
<li>Chaque "modification" crée une nouvelle version.</li>
</p>
        <p>En programmation fonctionnelle, on crée de nouvelles structures plutôt que de modifier les existantes. Pourquoi ?</p>
        <li>Évite les effets de bord.</li>
<li>Rend le code plus prévisible.</li>

<li>Simplifie le raisonnement et le débogage.</li>

      `,
      code: {
        imperative: `
// Déclaration avec const
const personne = {
  prenom: "Alice",
  age: 30
};

console.log("Avant modification :", personne);

// On peut modifier le contenu de l'objet !
personne.age = 31;
console.log("Après modification :", personne);

// On peut utiliser Object.freeze pour rendre l'objet immuable
const personneImmutable = Object.freeze({
  prenom: "Alice",
  age: 30
});
`,

        functional: `/// Déclaration avec const
const number = 3

// On ne peut pas modifier le contenu de l'objet
// il est immutable !
number = 31;`,
      },
    },
    {
      id: 5,
      title: "🔄 Fonctions Pures",
      content: `
      <p>Une fonction pure est une fonction qui :</p>
<li>Retourne toujours le même résultat pour les mêmes arguments</li>
<li>N'a pas d'effets secondaires (ou effets de bord)</li>
<bR
        <p>Exemple : ajout d'un élement dans une liste</p>
      `,
      code: {
        functional: `
// Liste initiale
const fruits = ["pomme", "banane"];

function ajouterFruitPure(liste, fruit) {
  return [...liste, fruit]; // Copie + ajout
}

const nouveauxFruits = ajouterFruitPure(fruits, "cerise");

console.log(fruits);         // → pas changé
console.log(nouveauxFruits); 
`,

        imperative: `
// Liste initiale
let fruits = ["pomme", "banane"];

function ajouterFruitImpure(liste, fruit) {
  liste.push(fruit); // Mutation directe
  return liste;
}

ajouterFruitImpure(fruits, "cerise");

console.log(fruits); 
// → la liste d'origine a changé`,
      },
    },

    {
      id: 6,
      title: "🎯 Les fonctions d'ordre supérieur ",
      content: `
      <p>Une fonction d'ordre supérieur est une fonction qui :
<li>Prend une fonction en argument.</li>
ou
<li>Retourne une fonction en résultat.</li>
Exemples classiques : map, filter, reduce</p>
      `,
      code: {
        functional: `
const personnes = [
{nom : "bob", age : 21}, 
{nom: "marie", age : 16}, 
{nom: "Paul", age : 18}];

//Fonction Pure
const isAdult = personne => personne.age >= 18;


const adultes = personnes.filter(isAdult);

console.log(adultes);`,

        imperative: `
const personnes = [
{nom : "bob", age : 21}, 
{nom: "marie", age : 16}, 
{nom: "Paul", age : 18}];

// Tableau vide pour stocker les résultats
let adultes = [];

// Boucle impérative (impur) pour ajouter les adultes
for (let i = 0; i < personnes.length; i++) {
  if (personnes[i].age >= 18) {
    adultes.push(personnes[i]);
  }
}

console.log(adultes);`,
      },
    },
    {
      id: 7,
      title: "💡 Avantages et Applications",
      content: `
        <p><strong>Avantages majeurs:</strong></p>
        <ul>
          <li>Parallélisation et concurrence facilitées</li>
          <li>Testabilité et prédictibilité améliorées</li>
          <li>Meilleure lisibilité du code</li>
        </ul>
        <p><strong>Domaines d'application:</strong></p>
        <ul>
          <li>Big Data et traitement de données (Apache Spark, MapReduce)</li>
          <li>Intelligence artificielle et apprentissage automatique</li>
          <li>Systèmes distribués (Erlang, Elixir)</li>
          <li>Développement web moderne (React, Redux)</li>
        </ul>
      `,
    },
    {
      id: 8,
      title: "🏁 Conclusion",
      content: `
        <p><strong>Récapitulatif des concepts clés :</strong></p>
        <ul>
          <li><strong>Fonctions pures</strong> : Des fonctions qui ne dépendent que de leurs entrées et ne produisent aucun effet secondaire. Elles sont essentielles pour écrire du code prévisible et facile à tester.</li>
          <li><strong>Immutabilité des données</strong> : L'immutabilité empêche les modifications imprévues des données, ce qui rend le code plus sûr et plus facile à comprendre.</li>
          <li><strong>Fonctions d'ordre supérieur</strong> : Ces fonctions permettent d'abstraire des comportements, favorisant ainsi la réutilisation et la composition de code. Elles facilitent le traitement de données complexes de manière élégante.</li>
        </ul>
        <p><strong>Pourquoi adopter la programmation fonctionnelle ?</strong></p>
        <ul>
          <li>Elle rend votre code plus prévisible et testable, ce qui améliore la maintenabilité.</li>
          <li>Elle permet de mieux gérer les effets de bord, rendant les programmes plus robustes.</li>
          <li>Elle favorise l'écriture de code plus concis et lisible.</li>
        </ul>
        <p><strong>Pour aller plus loin :</strong></p>
        <ul>
          <li>Explorer des bibliothèques fonctionnelles (Lodash, Ramda) pour étendre les capacités de votre code.</li>
          <li>Essayer un langage principalement fonctionnel, comme Scala, ou un langage fonctionnel pur, comme Haskell.</li>
        </ul>
        <br/>
        <p>La programmation fonctionnelle ne s'oppose pas aux autres paradigmes, mais elle les complète. Dans le monde moderne du développement, vous trouverez souvent des langages hybrides qui intègrent des éléments fonctionnels pour tirer parti de ces avantages. Par exemple, avec React et l’utilisation des Hooks, ou encore avec Redux pour gérer l’état de manière immuable et prévisible.</p>
        <p>Ce cours a été réalisé avec React et Redux (voir <a href="https://github.com/AnthonyDurussel/intro-functional-programming" target="_blank">GitHub</a>)</p>
      `,
    },
  ],
};

// Reducer
function slideReducer(state = initialState, action) {
  switch (action.type) {
    case "NEXT_SLIDE":
      return {
        ...state,
        currentSlide: Math.min(state.currentSlide + 1, state.slides.length - 1),
      };
    case "PREV_SLIDE":
      return {
        ...state,
        currentSlide: Math.max(state.currentSlide - 1, 0),
      };
    case "GO_TO_SLIDE":
      return {
        ...state,
        currentSlide: action.payload,
      };
    default:
      return state;
  }
}

// Create store
export const store = createStore(slideReducer);
