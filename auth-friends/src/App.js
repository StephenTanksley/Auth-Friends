import React from 'react';
import { Route, Link } from 'react-router-dom'

//component imports
import Signin from './components/signin'
import Account from './components/Account'
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/signin'>Sign In</Link>
        <Link to='/account'>My Account</Link>
      </nav>

      <Route exact path='/signin' component={Signin} />
      <ProtectedRoute exact path='/account' component={Account} />
    </div>
  );
}

export default App;