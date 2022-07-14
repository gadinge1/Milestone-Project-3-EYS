import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './app.css';

import Cleansers from '../cleansers/Cleansers'

import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Cleansers() {

  const cleansers = ['Cleansers', 'Toners', 'Essence', 'Serums/Ampoules', 'Eye Creams' , 'Moisturizers' , 'Sunscreens']


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Ellavate Your Skin</h1>

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
                <Nav.Link eventKey={"cleansersPage"}> <Link to="/cleansers">Cleansers</Link> </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>

        {/* <div className="display">
          <Route path="/cleansers" render={() => <Cleansers cleansers={cleansers} />} /> */}

        <div className="display">
          <Route path="/cleansers" component={Cleansers} />  

          </div>
        </div>

      </Router>

    </div>
  );
}

export default Cleansers;