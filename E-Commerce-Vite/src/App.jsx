
import './App.css'
import ShopPage from './components/ShopPage/ShopPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import ProductDetailPage from './components/Pages/ProductDetail/ProductDetailPage';
import ShopDetailPage from './components/ShopPage/ShopDetailPage';
import ContactUsPage from './components/Pages/ContactUsPage/ContactUsPage';

import SignupPage from './components/Pages/SignUpPage/SignUp';
import LoginPage from './components/Pages/LoginPage/LoginPage';





function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path ='/' component={HomePage}/>
        <Route path='/shop' component={ShopDetailPage}/>
        <Route path='/about' component={ProductDetailPage}/>
        <Route path='/contact' component={ContactUsPage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path="/signup" component={SignupPage } />
        
      </Switch>
    </Router>
    
    
  );
  
  
}

export default App

