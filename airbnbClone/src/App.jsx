import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './components/Data'
function App() {
  const cards = Data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})      
  return (
    <>
    <Navbar />
    <Hero />
    <section className="cards-list">
                {cards}
            </section>
    </>
  )
}

export default App
