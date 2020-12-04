import 'bootstrap/dist/css/bootstrap.css' 
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Button, Nav} from "react-bootstrap"
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Price from './components/Price/Price';
import Usage from './components/Usage/Usage'


function App() {
  return (
    <Router>
    <div className="App">
        <h1>Welcome to ValuePC. Select an option to get started.</h1>
        <br/>
        <table align="center" className="choices">
          <thead>
            <tr>
              <Nav.Link href = "/price"><td><Button variant="info"><h3>Find a laptop within my budget</h3></Button></td></Nav.Link>
              <td><div className="gap"></div></td>
              <Nav.Link href = "/usage"><td><Button variant="success"><h3> Find a laptop that fits my usage</h3></Button></td></Nav.Link>
            </tr>
          </thead>
        </table>
      
      
    </div>
    <Switch>
      <Route path="/price" exact component = {Price}/>
      <Route path="/usage" exact component = {Usage}/>
    </Switch>
    </Router>
  );
}

export default App;
