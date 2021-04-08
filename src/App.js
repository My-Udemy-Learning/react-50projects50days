import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage/mainpage';
import { Switch, Route } from 'react-router-dom';
import ExpandingCards from './Components/ExpandingCards/expandingCards';
import ProgressSteps from './Components/ProgressSteps/progressSteps';


function App() {
  return (
    <>
    

  <Switch>
    
   <Route path='/' component={MainPage} exact />
    <Route path='/expandingCards' component={ExpandingCards} exact />
    <Route path='/progressSteps' component={ProgressSteps} exact />
  </Switch>
  </>
  );
}

export default App;
