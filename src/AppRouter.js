import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Index from './pages/Index'
import Video from './pages/Video'
import Workplace from './pages/Workplace'
import './css/index.css'

function AppRouter () {

    return ( 
      <Router>
        <div class="mainDiv">
          <div class="leftNav">
            <h3>一级导航</h3>
            <ul>
              <li><Link to="/">博客首页</Link></li>
              <li><Link to="/video/">视频教程</Link></li>
              <li><Link to="/workplace/">职能教程</Link></li>
            </ul>
          </div>
          <div class="rightDiv">
            <Route path='/' exact component={Index} />
            <Route path='/video/' component={Video} />
            <Route path='/workplace/' component={Workplace} />
          </div>
        </div>
      </Router>
     );
}
 
export default AppRouter;