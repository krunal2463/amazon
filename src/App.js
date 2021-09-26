
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Practice from './Practice';
import Checkout from './Checkout'
import Login from "./Login" 
import { auth } from './firebase';
import { useStateValue} from "./StateProvider";
import {useEffect} from "react";
import Payment  from "./Payment"
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51Jb3fSFilCQL9Rj2Ir5X1otx3AmwVW8WzkvY9uWLYbY7ILVzMtRnGMGbkDZ99ibwCowmSDMCfs21C4xw41838Y3e00WE4VKdQl');
 

function App() {
   const [{}, dispatch] = useStateValue();

 useEffect (() => {
      //will only run once when the app component loads...

      auth.onAuthStateChanged(authUser => {
         console.log('THE USER IS >>>', authUser);
         if (authUser) {
            //the user just logged in / the user was logged in 
            dispatch({
               type: 'SET_USER',
               user: authUser,
            })
         } else {
            //the user is logged out
            dispatch({
               type: 'SET_USER',
               user: null
            })
         }
      })
   });


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
