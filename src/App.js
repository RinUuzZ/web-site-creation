import './App.css';
import Header from './Components/Home/Header/Header';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './Components/pages/HomePages/Home';
import Service from './Components/Services/Service';
import Plans from './Components/Plans/Plans';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Router >
        <Header />
        <Home />
        <Service />
        <Plans />
        <Contact />
        <Switch>
          <Router path='/' exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
