import React from "react";
import  {Button, Accordion, Card, Nav}  from 'react-bootstrap';
import axios from 'axios';

class Price extends React.Component 
{
  constructor()
	{
		super()
		this.state = 
		{
			price: '0',
			laptops: []
		}
	}
	onChange = (event) => 
	{
		this.setState({price: event.target.value})
		console.log(event.target.value)
		console.log(this.state.price)
		const URL = `https://value-laptop-backend.herokuapp.com/laptop/price/${event.target.value}` 
		axios.get(URL)
		.then(res =>
		{
			console.log(res.data)
			this.setState({laptops : Object.values(res.data)})
			console.log(this.state.laptops)
		}).catch(err => console.log(err))
	}
	handleClear = () => 
	{
		this.setState({price: '0'})
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
					<label>$
						<input 
						type = "text" 
						name = "price" 
						value = {this.state.price}
						onChange ={this.onChange}
						/>
					</label>
          <br/>
					<button className="btn btn-danger" type="Reset" onClick={this.handleClear}>Clear</button>
				</div>
				</form>
			</div>
			<div>
				<Accordion>
				{
				this.state.laptops.map(laptop => 
				{
					return (
					<Card align="left">
					<Card.Header key={laptop._id}>
						<Accordion.Toggle as={Button} variant="link" eventKey={laptop._id} >
							<h3>{laptop.name} :: {laptop.category} - ${laptop.price}</h3>
						</Accordion.Toggle>
					</Card.Header>
					
					<Accordion.Collapse eventKey={laptop._id}>
						<Card.Body>
						<table>
							<tbody>
								<tr>
									<td>
										<a href={laptop.links.image}><img alt = {laptop.name} src ={laptop.links.image} width="600" height = "400"></img></a>
									</td>
									<td>
										<table className="table">
											<tbody>
												<tr>
													<td><h5>CPU:</h5></td>
													<td><h6>{laptop.cpu}</h6></td>
												</tr>
												<tr>
													<td><h5>RAM:</h5></td>
													<td><h6>{laptop.ram} GB</h6></td>
												</tr>
												<tr>
													<td><h5>Storage:</h5></td>
													<ul><h6>
														<li>{laptop.storage.nvme} GB NVME</li>
														<li>{laptop.storage.ssd} GB SSD</li>
														<li>{laptop.storage.hdd} GB HDD</li>
													</h6></ul>
												</tr>
												<tr>
													<td><h5>GPU:</h5></td>
													<td><h6>{laptop.gpu}</h6></td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<br/>
						<Nav.Link href={laptop.links.amazon}><Button variant="warning"><h2>Buy from Amazon</h2></Button></Nav.Link>
          {
            !(laptop.links.newegg ==="")
            ?<Nav.Link href={laptop.links.newegg}><Button variant="info"><h2>Buy from Newegg</h2></Button></Nav.Link>
            : <p>newegg link unavailable</p>
          }				
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

export default Price;
