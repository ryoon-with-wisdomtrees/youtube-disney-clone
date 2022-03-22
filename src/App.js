import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <switch>
          <Route exact path="/">
            <Login test="바부" />
          </Route>
        </switch>
      </Router>
    </div>
  );
}

export default App;
