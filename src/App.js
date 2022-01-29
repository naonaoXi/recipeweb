import React from 'react';
import Detail from './components/Detail';
import Main from './components/Main';
import NavBar from './components/NavBar';
import { 
  BrowserRouter as Router,
  Route,
  Routes
 } from "react-router-dom";

 import './css/app.css';

class App extends React.Component {
  
  render(){
    return (
      <React.Fragment>
        <Router>
          <Routes>
            <Route path="*" element={ <NavBar /> } />
          </Routes>
          
            <div id="main-content">

              <Routes>
                  <Route exact path="/" element={ <Main /> } />
                  <Route exact path="/details/:id" element={ <Detail /> } />
                  
                  <Route path="*" component={ NoMatch } />
              </Routes>
              
              
            </div>
        </Router>
        
      </React.Fragment>
    );
  }
}

function NoMatch(props) {

  console.log(props)
  return (
    <div>
      <h3>
        No match for <code>{props.location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
