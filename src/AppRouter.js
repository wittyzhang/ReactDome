import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Index from './pages/Index'
import List from './pages/List'
import Home from './pages/Home'

// exact 精准匹配
function AppRouter() {
  return (

    <Router>
      <ul>
        <li><Link to='/'>index</Link></li>
        <li><Link to='/home'>home</Link></li>
        <li><Link to='/list/123'>List</Link></li>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list/:id" component={List}></Route>
        <Route path="/home" component={Home}></Route>
      </ul>
    </Router>
  )
}

export default AppRouter;