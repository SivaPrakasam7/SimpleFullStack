import './App.css';
import './component/component.css';
import './assembler/assembler.css';
import Login from './assembler/login';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/user">
          <div id="user"></div>
        </Route>
      </Router>
    </div>
  );
}

export default App;