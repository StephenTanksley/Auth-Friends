import React from 'react';
import { Route, Link } from 'react-router-dom'

//component imports
import Login from './components/Login - Logout/Login'
import Logout from './components/Login - Logout/Logout'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute';
import { getToken } from './utils/api'

//styling
import { Container } from './components/Styled'
import './App.css';

function App() {
  const signedIn = getToken()

  return (
    <div className="App">
      
      {/* Please move navigation to another component. */}
      <nav>
        {/* <Link to='/'>Home</Link> */}
        
        {/* Checks to see if we have a token or not. If we don't, we sign in */}
        {!signedIn && <Link to='/login'>Login</Link>}
        
        {/* If we do, we get our account. */}
        {signedIn && <Link to='/dashboard'>Dashboard</Link>}
        {signedIn && <Link to='/logout'>Logout</Link>}

      </nav>

      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      <ProtectedRoute exact path='/logout' component={Logout} />
    </div>
  );
}

export default App;