import './App.css';
import './component/component.css';
import './assembler/assembler.css';
import Login from './assembler/login';
import User from './assembler/user';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Router>
    </div>
  );
}

export default App;