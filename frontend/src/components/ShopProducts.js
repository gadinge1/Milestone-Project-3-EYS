import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Cleanser from "./Cleanser";

import Nav from "react-bootstrap/esm/Nav";
import Container from "react-bootstrap/esm/Container";
import Toner from './Toner';
import Essence from './Essence';
import Serum from './Serums';
import Eyes from './Eyes';
import Sunscreen from './Sunscreen';
import Moisturizer from './Moisturizer';

function ShopProducts() {

    return (
        <div className="Shop">
            <Router>
                <header>
                    <h1 className="shoptitle">Shop All</h1>
                    <p>Choose Category</p>
            
                <Container>
                <Nav defaultActiveKey="/" variant="tabs" fill>
                <div className="categories">
                    <Nav.Item>
                        <Nav.Link eventKey={"cleanserPage"}> <Link to="/cleanser">Cleansers</Link> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={"tonersPage"}> <Link to="/toner">Toners</Link> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={"essencePage"}> <Link to="/essence">Essence</Link> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={"serumsPage"}> <Link to="/serums">Serums/Ampoules</Link> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={"eyesPage"}> <Link to="/eyes">Eyes</Link> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={"moisturizerPage"}> <Link to="/moisturizer">Moisturizers</Link> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={"spfPage"}> <Link to="/spf">Sunscreens</Link> </Nav.Link>
                    </Nav.Item>
                </div>
                </Nav>
                </Container>
                
            </header>

            <div className="displaycategories">
                <Route path="/cleanser" component={Cleanser} />
                <Route path="/toner" component={Toner} />
                <Route path="/essence" component={Essence} />
                <Route path="/serums" component={Serum} />
                <Route path="/eyes" component={Eyes} />
                <Route path="/moisturizer" component={Moisturizer} />
                <Route path="/spf" component={Sunscreen} />

            </div>

            <div className="products">
            <div className="products1" />
                    <img src="glenna.jpg" alt="glenna" />
                {/* <div className="products2">
                    <img src="kinn.jpg" alt="kinn" />
                </div>
                <div className="products3">
                    <img src="harper.jpg" alt="harper" />
                </div> */}
            </div>

            </Router>  

        </div>

    );

}

export default ShopProducts;