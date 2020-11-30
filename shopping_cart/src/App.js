import { React,  Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { Button, Accordion } from 'react-bootstrap';


class App extends Component {
	constructor(props){
		super(props);
		this.state= { products: [], filteredProducts: []};
	}
	componentWillMount(){
		fetch("http://100.115.92.2:8000/products").then( res => res.json())
		.then(data => this.setState({
			products: data,
			filteredProducts: data
		}));
	}
	render(){
		return (
			<div className="container">
			<h1 class="text-success"> Ecommerce Shopping Cart</h1>
		  	<hr/>
		  	<div className="row">
				<div className="col-md-8">
					<Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
					<Button>Search by Price</Button> 
					<Button>Search by Price</Button> 
				</div>

				<div className="col-md-4">

				</div>
    			</div>

			</div>
		);
	}
}

export default App;
