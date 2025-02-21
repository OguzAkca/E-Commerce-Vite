import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux';
import { initializeUserFromStorage } from './components/store/actions';

// Page imports
import HomePage from './components/Pages/HomePage';
import ShopDetailPage from './components/ShopPage/ShopDetailPage';
import ProductDetailPage from './components/Pages/ProductDetail/ProductDetailPage';
import ContactUsPage from './components/Pages/ContactUsPage/ContactUsPage';
import SignupPage from './components/Pages/SignUpPage/SignUp';
import LoginPage from './components/Pages/LoginPage/LoginPage';
import { isAuthenticated } from './components/Pages/LoginPage/Auth';

// Protected Route Component
const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const auth = isAuthenticated();
      setIsAuth(auth);
      setLoading(false);
    };

    checkAuth();
    // Check auth status every minute
    const interval = setInterval(checkAuth, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a proper loading component
  }

  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize user data from storage when app loads
    dispatch(initializeUserFromStorage());
  }, [dispatch]);

  return (
    <Router>
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        {/* Public Routes */}
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/register" component={SignupPage} />
        <Route path="/contact" component={ContactUsPage} />

        {/* Protected Routes */}
        <PrivateRoute path="/shop" component={ShopDetailPage} />
        <PrivateRoute path="/about" component={ProductDetailPage} />
        
        {/* Catch all route - redirect to home */}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;