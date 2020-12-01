import { React,  Component } from 'react';
import './App.css';

import Products from './components/Products';
import Filter from './components/Filter';
import Basket from './components/Basket';

// import Products from './components/Products';
// import Filter from './components/Filter';
import  {Button, Accordion, Card}  from 'react-bootstrap';
// import Card from 'react-bootstrap/Card'
// import Basket from './components/Basket';
import axios from 'axios';


class App extends Component {
	state = {data: []}
	constructor(props){
		super(props);
		// this.state= { products: [], filteredProducts: [], cartItem: []};
		// this.handleChangeSort = this.handleChangeSort.bind(this);
		// this.handleChangeSize = this.handleChangeSize.bind(this);
		// this.handleAddToCart = this.handleAddToCart.bind(this);
	}

	render(){
		return (
			<>
			<div>
			<Accordion>
        {
          this.state.data.map(laptop => 
          {
            return (
            <Card align="left">
              <Card.Header key={laptop._id}>
                <Accordion.Toggle as={Button} variant="link" eventKey={laptop._id} >
			<h3>{laptop.name} - ${laptop.price} :: {laptop.category}</h3>
                </Accordion.Toggle>
              </Card.Header>
              
              <Accordion.Collapse eventKey={laptop._id}>
                <Card.Body>
				<img src ={laptop.links.image} width="600" height = "400"></img>
			<h6>CPU</h6> 
			<p>{laptop.cpu}</p>
                </Card.Body>
              </Accordion.Collapse>
            
            </Card>
            )})
          }
        </Accordion>

			</div>
			</>
		);
	}
}

export default App;
