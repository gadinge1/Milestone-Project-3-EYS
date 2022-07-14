import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './app.css';

import Home from './components/Home'
import About from './components/About'
import ShopProducts from './components/ShopProducts'
import Login from './users/Login';
import SignUp from './users/SignUp';

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import FontAwesomeIcon from 'react-bootstrap/Nav'

function App() {

  const products = ['Cleansers', 'Toners', 'Essence', 'Serums/Ampoules', 'Eye Creams' , 'Moisturizers' , 'Sunscreens']


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">EYS</h1>
          <p>Ellavate Your Skin</p>
          {/* <div class="navBar">
            <a href="#" class="navbar__link"></a>
              <span class="material-icons">home</span>
          </div> */}

          {/* <div className="navBar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/packages">Our Packages</Link>
              </li>
            </ul>
          </div> */}
          <Container>
            <Nav defaultActiveKey="/" variant="tabs" fill>
              <Nav.Item>
                <Nav.Link eventKey={"homePage"}> <Link to="/home">Home</Link> </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link eventKey={"aboutPage"}> <Link to="/about">About Us</Link> </Nav.Link>
              </Nav.Item>
              <Nav.Item >
                <Nav.Link eventKey={"productsPage"}> <Link to="/products">Shop All</Link> </Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              </Nav.Item>
            </Nav>
          </Container>
        </header>

        <div className="display">
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" render={() => <ShopProducts products={products} />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          
        </div>

      </Router>

    </div>
  );
}

export default App;
