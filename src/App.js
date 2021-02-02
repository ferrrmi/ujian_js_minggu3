import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbars from "./Component/Navbars";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Navbars title="Ujian Juara Coding Minggu Ke - 3" />
      <Container className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
