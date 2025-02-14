
import './App.css'
import Header from './components/layout/Header/Header'

import EditorsPicks from './components/EditorsPick/EditorPick'
import { Page } from './components/Slider/SliderUse';
import ShopPage from './components/ShopPage/ShopPage';
import Footer from './components/layout/Footer';



function App() {
  

  return (
    <div className="container">
      <Header />
      <Page />
      <div className="relative z-20">
        <EditorsPicks />
      </div>
      <ShopPage/>
      
    <Footer/>
    
  
    </div>
    
  );
  
  
}

export default App

/* <header className="sticky top-0 z-10">
    <Header/>
    </header>
    
  
      
    
    
      
      
      <footer>
      <Footer/>
      </footer> */