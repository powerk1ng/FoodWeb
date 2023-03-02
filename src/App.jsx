import Cards from "./components/Cards"
import Category from "./components/Category"
import Food from "./components/Food"
import Header from "./components/Header"
import Hero from "./components/Hero"


function App() {

  return (
    <div className="app">
      <Header/>
      <Hero/>
      <Cards/>
      <Food/>
      <Category/>
    </div>
  )
}

export default App
