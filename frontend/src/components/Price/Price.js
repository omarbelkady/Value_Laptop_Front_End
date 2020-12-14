import React from "react";
import DisplayLaptop from "../DisplayLaptop/DisplayLaptop";
import axios from 'axios';

class Price extends React.Component 
{

	state = 
	{
		price: '0',
		laptops: []
	}

	onChange = (event) => this.setState({price: event.target.value}, () => console.log("price: "+ this.state.price))		

	handleSearch = (e) => 
	{
		e.preventDefault()
		console.log(this.state.price)
		const URL = `https://value-laptop-backend.herokuapp.com/laptop/price/${this.state.price}` 
		axios.get(URL)
		.then(res =>
		{
			// console.log(res.data)
			this.setState({laptops : Object.values(res.data)})
			console.log(this.state.laptops)
		}).catch(err => console.log(err))
	}

	render()
	{
		return (
			<>
      <br/>
			<div align ="center">
				<form onSubmit = {this.handleSubmit}>
				<div className="form-group">
          <h3>How much you wanna spend?</h3>
					<label>
						<input
						className = "form-control" 
						type = "text" 
						name = "price" 
						value = {this.state.price}
						onChange ={this.onChange}
						/>
					</label>
					<button className="btn btn-success" type="search" onClick={this.handleSearch}><><h5>🔍</h5></></button>
				</div>
				</form>
			</div>
			<div>
				<DisplayLaptop laptops={this.state.laptops}/>
			</div>
			</>
		);
	}
}

export default Price;
