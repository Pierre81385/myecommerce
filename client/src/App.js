import "./App.css";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"; //for routing
import "bootstrap/dist/css/bootstrap.min.css"; //for bootstrap styling
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Home from "./pages/home.js";
import Register from "./pages/register.js";
import Login from "./pages/login.js";
import Products from "./pages/products.js";

function App() {
  const style = {
    link: {},
  };

  return (
    <div className="App">
      <Router>
        <Container>
          <Row>
            <h1>Store Name Here</h1>
          </Row>
          <Row>
            <Col>
              <Link
                variant="outline-dark"
                className="btn btn-outline-dark"
                to="/login"
                style={style.link}
              >
                LOGIN
              </Link>
              <Link
                variant="outline-dark"
                className="btn btn-outline-dark"
                to="/register"
                style={style.link}
              >
                REGISTER
              </Link>
            </Col>
            <Col>
              <Link
                variant="outline-dark"
                className="btn btn-outline-dark"
                to="/home"
                style={style.link}
              >
                HOME
              </Link>

              <Link
                variant="outline-dark"
                className="btn btn-outline-dark"
                to="/products"
                style={style.link}
              >
                PRODUCTS
              </Link>
            </Col>
          </Row>
        </Container>

        <Route exact path="/">
          <Redirect to="/home"></Redirect>
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
      </Router>
    </div>
  );
}

export default App;
