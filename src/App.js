import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from'./components/pages/About';
import Printing from'./components/pages/Printing';
import Consulting from'./components/pages/Consulting';
import JoinUs from'./components/pages/JoinUs';
import Projects from'./components/pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About}/>
          <Route path='/printing' exact component={Printing}/>
          <Route path='/consulting' exact component={Consulting}/>
          <Route path='/projects' exact component={Projects}/>
          <Route path='/join-us' exact component={JoinUs}/>
        </Switch>
        <Footer />
        </Router>
    </>
  );
}

export default App;
