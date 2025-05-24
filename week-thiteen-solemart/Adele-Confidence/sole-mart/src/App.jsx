import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import ProductsDisplay from "./components/ProductsDisplay";
import Footer from "./components/Footer";



const App = () => {
  return (
    <>
    <div className="container mx-auto bg-amber-50">
      
      <NavBar />
      <Hero />
      <Filter />
      <ProductsDisplay />
      <Footer />
      


      </div>
      
   </> 
  )
}

export default App