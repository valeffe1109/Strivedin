import React, { Component } from 'react';
import Profile from './Components/Profile'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage'
import Login from './Components/Login'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import{BrowserRouter as Router,Route} from 'react-router-dom'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faHome , faUsers,faBriefcase,faComment,faBell,faUniversity,faUser} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faHome,faUsers,faBriefcase,faComment,faBell,faUniversity,faUser)

class Main extends Component {
  state = {  }
  render() { 
    return ( 
      <>
     <Router>
     <NavBar/>
     <Route path='/Me' exact component={Profile}/>
     <Route path='/Home' exact component={Home}/>
	 <Route path="/Landing" exact component={LandingPage}/>
	 <Route path="/Login" exact component={Login}/>
     </Router>
     </>

     );
  }
}
 
export default Main;