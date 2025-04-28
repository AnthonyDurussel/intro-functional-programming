import { Provider } from "react-redux"
import { store } from "./store"
import SlideShow from "./components/SlideShow"
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header>
          <h1>✨ Introduction à la Programmation Fonctionnelle ✨</h1>
        </header>
        <main>
          <SlideShow />
        </main>
      </div>
    </Provider>
  )
}

export default App
