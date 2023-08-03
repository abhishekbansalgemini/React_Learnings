import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' > <About></About> </Route>
      <Route path='/contact' > <Contact /> </Route>
    </Switch>
    </>
  );
}

export default App;
