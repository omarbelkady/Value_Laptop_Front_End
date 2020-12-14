import axios from "axios";
import React    from "react";
import  {Button}  from 'react-bootstrap';
import DisplayLaptop from "../DisplayLaptop/DisplayLaptop";

class Usage extends React.Component 
{
  state = 
	{
		usage: '0',
		laptops: []
	}

  handleClick = (use) =>
  {
    console.log(use)
    const URL = `https://value-laptop-backend.herokuapp.com/laptop/category/${use}` 
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
    return(
      <>
      <div>
        <br/><Button onClick = {() => this.handleClick("general")}>I just need something that works</Button><br/>
        <br/><Button onClick = {() => this.handleClick("gaming")}>I am a gamer and I value my FPS</Button><br/>
        <br/><Button onClick = {() => this.handleClick("workstation")}> I'm an enthusiast and I want the best</Button><br/>
      </div>
		
		<div>
			<DisplayLaptop laptops={this.state.laptops} />
		</div>
      
      </>
    )
  }
}

export default Usage;
