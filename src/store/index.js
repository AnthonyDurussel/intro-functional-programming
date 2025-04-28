import { createStore } from "redux"

// Initial state
const initialState = {
  currentSlide: 0,
  slides: [
    {
      id: 1,
      title: "🚀 Introduction",
      content: `
        <p>La programmation fonctionnelle est un paradigme qui traite le calcul comme l'évaluation de fonctions mathématiques.</p>
        <p>Principes clés:</p>
        <ul>
          <li>Fonctions pures</li>
          <li>Immutabilité</li>
          <li>Fonctions d'ordre supérieur</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "🧪 Fonctions Pures & Immutabilité",
      content: `
        <p>Une fonction pure retourne toujours le même résultat pour les mêmes arguments et n'a pas d'effets secondaires.</p>
        <p>L'immutabilité signifie que les données ne changent pas après leur création.</p>
      `,
      code: `// Fonction pure
function add(a, b) {
  return a + b;
}

// Immutabilité
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log("Original:", numbers);
console.log("Nouvelle liste:", doubled);`,
    },
    {
      id: 3,
      title: "🔄 Fonctions d'Ordre Supérieur",
      content: `
        <p>Les fonctions d'ordre supérieur prennent d'autres fonctions comme arguments ou retournent des fonctions.</p>
        <p>Exemples: map, filter, reduce</p>
      `,
      code: `const numbers = [1, 2, 3, 4, 5, 6];

// map: transformer chaque élément
const doubled = numbers.map(n => n * 2);
console.log("map:", doubled);

// filter: garder certains éléments
const evens = numbers.filter(n => n % 2 === 0);
console.log("filter:", evens);

// reduce: accumuler une valeur
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("reduce:", sum);`,
    },
    {
      id: 4,
      title: "🧩 Composition de Fonctions",
      content: `
        <p>La composition de fonctions consiste à combiner plusieurs fonctions pour en créer une nouvelle.</p>
      `,
      code: `// Fonctions simples
const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;

// Composition
const compose = (...fns) => x => 
  fns.reduceRight((acc, fn) => fn(acc), x);

const calculate = compose(square, increment, double);

// Test
const input = 3;
console.log(\`Input: \${input}\`);
console.log(\`Résultat: \${calculate(input)}\`);
// (3 * 2 + 1)² = 7² = 49`,
    },
    {
      id: 5,
      title: "🎯 Exemple Pratique",
      content: `
        <p>Application des principes fonctionnels pour traiter des données.</p>
      `,
      code: `// Données
const students = [
  { name: "Alice", grades: [85, 90, 92] },
  { name: "Bob", grades: [75, 80, 85] },
  { name: "Charlie", grades: [90, 95, 85] }
];

// Trouver les étudiants avec une moyenne > 85
const highPerformers = students
  .map(student => ({
    name: student.name,
    average: student.grades.reduce((sum, g) => sum + g, 0) / 
             student.grades.length
  }))
  .filter(student => student.average > 85)
  .map(student => student.name);

console.log("Étudiants performants:", highPerformers);`,
    },
  ],
}

// Reducer
function slideReducer(state = initialState, action) {
  switch (action.type) {
    case "NEXT_SLIDE":
      return {
        ...state,
        currentSlide: Math.min(state.currentSlide + 1, state.slides.length - 1),
      }
    case "PREV_SLIDE":
      return {
        ...state,
        currentSlide: Math.max(state.currentSlide - 1, 0),
      }
    case "GO_TO_SLIDE":
      return {
        ...state,
        currentSlide: action.payload,
      }
    default:
      return state
  }
}

// Create store
export const store = createStore(slideReducer)
