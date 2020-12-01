import { React,  Component } from 'react';
import  {Button, Accordion, Card}  from 'react-bootstrap';
import './App.css'
import axios from 'axios';


class App extends Component 
{
	state = {data: []}
	componentDidMount()
	{
		let price = 2000// price needs to be a variable
		const URL = `https://value-laptop-backend.herokuapp.com/laptop/price/${price}` 
		axios.get(URL)
		.then(res =>
		{
			console.log(res.data)
			this.setState({data : Object.values(res.data)})
		}).catch(err => console.log(err))
	}

	render()
	{
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
							<h3>{laptop.name} :: {laptop.category} - ${laptop.price}</h3>
						</Accordion.Toggle>
					</Card.Header>
					
					<Accordion.Collapse eventKey={laptop._id}>
						<Card.Body>
						<table>
							<tbody>
								<tr>
									<td>
										<img alt = {laptop.name} src ={laptop.links.image} width="600" height = "400"></img>
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
