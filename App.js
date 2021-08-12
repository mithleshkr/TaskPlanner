import React from 'react';
//import './App.css';
//import BasicForm from './components/forms/screens/BasicForm';
import Login from'./screens/Login';
//import Dashboard from './screens/Dashboard'
import {BrowserRouter as  Router, Route, Switch} from 'react-router-dom'
import Dashboard from './screens/Dashboard';


const App = () => {
  return(
  <>
  <Router>
  
  <Switch>
    <Route path="/" component={Login} exact></Route>
    <Route path="/Dashboard" component={Dashboard} exact></Route>
  </Switch>
  
    
   {/*} <Router>
      <Login />
      <Switch>
        <Route path="/" component={Login}/>
        <Route exact path="/Dashboard" component={Dashboard}/>
      </Switch>
  </Router> */}
  </Router>
  </>
  
  )
}
export default App;