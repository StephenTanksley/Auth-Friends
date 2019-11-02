import React from 'react';
import { Route, Link } from 'react-router-dom'

//component imports
import Signin from './components/signin'
import './App.css';

function App() {
  return (
    <div className="App">
      
      <nav>
        <Link to='/signin'>Sign In</Link>
        <Link to='/'>Home</Link>
      </nav>

      <Route exact path='/signin' component={Signin} />

    </div>
  );
}

export default App;
