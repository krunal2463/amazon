
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from "./Login" 
import { useStateValue} from "./StateProvider";
import Payment  from "./Payment";
import Footer from './Footer';



function App() {
   const [{}, dispatch] = useStateValue();


  return (
      <Router>
         <Switch>
           <Route path="/checkout">
              <Header />
              <Checkout />
              <Footer />
           </Route>
           <Route path="/login">
              <Login />
           </Route>
           <Route path="/payment">
               <Header />   
               <Payment />
               <Footer />
            </Route>
           <Route exact path="/">
              <Header />
             <Home />
             <Footer />
           </Route>
         </Switch>
         
      </Router>
      
    
  );
}

export default App;
