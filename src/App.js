import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from'./components/pages/About';
import Printing from'./components/pages/Printing';
import Consulting from'./components/pages/Consulting';
import JoinUs from'./components/pages/JoinUs';
import Projects from'./components/pages/Projects';

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About}/>
          <Route path='/printing' exact component={Printing}/>
          <Route path='/modelling' exact component={Consulting}/>
          <Route path='/projects' exact component={Projects}/>
          <Route path='/join-us' exact component={JoinUs}/>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
