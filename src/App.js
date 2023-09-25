import './App.css';
import React ,{useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51Nsn6oSBRusJyXoIwd3zglApzXCgHqEomaZ5CoxtHCNoSpnXWlD8sk1Ugnx1BsQ6EmSFJsJSIFkdidswfznsScDc00tchABzIg');
function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>',authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
         dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path="/" element ={<><Header/><Home/></>}/>
          <Route path='/payment' element={<><Header/><Elements stripe={promise}><Payment/></Elements></>}/>
          <Route path="/checkout" element ={<><Header/><Checkout/></>}/>
          <Route path="/orders" element={<><Header/><Orders/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
