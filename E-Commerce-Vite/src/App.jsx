
import './App.css'
import ShopPage from './components/ShopPage/ShopPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import ProductDetailPage from './components/Pages/ProductDetail/ProductDetailPage';




function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/about' component={ProductDetailPage}/>

        
      </Switch>
    </Router>
    
    
  );
  
  
}

export default App

