
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Practice from './Practice';
import Checkout from './Checkout'
import Login from "./Login" 
import { useStateValue} from "./StateProvider";
import Payment  from "./Payment"
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";



function App() {
   const [{}, dispatch] = useStateValue();


  return (
    
      <Router>
         <Switch>
           <Route path="/checkout">
              <Header />
              <Checkout />
           </Route>
           <Route path="/login">
              <Login />
           </Route>
           <Route path="/payment">
               <Header />   
               <Elements stripe={promise}>
                     <Payment />
               </Elements>
           </Route>
            <Route path="/practice">
            <Practice />
            <h1>This path is just for practice</h1>
           </Route>
           <Route exact path="/">
              <Header />
             <Home />
           </Route>
         </Switch>
      </Router>
      
    
  );
}

export default App;
