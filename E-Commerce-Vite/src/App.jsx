
import './App.css'
import ShopPage from './components/ShopPage/ShopPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import ProductDetailPage from './components/Pages/ProductDetail/ProductDetailPage';
import ShopDetailPage from './components/ShopPage/ShopDetailPage';
import ContactUsPage from './components/Pages/ContactUsPage/ContactUsPage';




function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={HomePage}/>
        <Route path='/shop' component={ShopDetailPage}/>
        <Route path='/about' component={ProductDetailPage}/>
        <Route path='/contact' component={ContactUsPage}/>

        
      </Switch>
    </Router>
    
    
  );
  
  
}

export default App

