
import './App.css'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer'
import ProductCard from './components/ProductCard'
import ShopPage from './components/ShopPage/ShopPage'
import EditorsPicks from './components/EditorsPick/EditorPick'
import Page from './components/Slider/Slider2'


function App() {
  

  return (
    <>
    <Header/>
    <Page/>
    <div className="relative z-20">
  <EditorsPicks />
</div>

      
    </>
  )
}

export default App

/* <header className="sticky top-0 z-10">
    <Header/>
    </header>
    
  
      
    
    
      
      
      <footer>
      <Footer/>
      </footer> */