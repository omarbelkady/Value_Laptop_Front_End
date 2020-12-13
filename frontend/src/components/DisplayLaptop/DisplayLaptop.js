import React    from "react";
import  {Button, Accordion, Card, Nav}  from 'react-bootstrap';

function DisplayLaptop(props)
{
  console.log("DisplayLaptop")
  console.log(props)
  console.log("Render")
  return (
    <div>
    <Accordion className="bg-dark">
      {
      props.laptops.map(laptop => 
      {
        return (
        <Card align="left">
        <Card.Header key={laptop._id} className="bg-dark">
          <div className="text-danger">
          <Accordion.Toggle 
          as={Button} 
          variant="link" 
          eventKey={laptop._id} >
            <h3>{laptop.name} :: {laptop.category} - ${laptop.price}</h3>
          </Accordion.Toggle>
          </div>
        </Card.Header>
        
        <Accordion.Collapse eventKey={laptop._id}>
          <Card.Body className="bg-dark">
          <table className="bg-dark">
            <tbody>
              <tr>
                <td>
                  <a href={laptop.links.image}><img alt = {laptop.name} src ={laptop.links.image} width="600" height = "400"></img></a>
                </td>
                <td>
                  <table className="table">
                    <tbody className="text-light">
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
                          <li>
                          {
                            (laptop.storage.nvme) ===0 ? 
                              <p>No NVME</p>: 
                              (laptop.storage.nvme>=1000) ?
                                <p>{laptop.storage.nvme /1000.0} TB NVME</p>:
                                <p>{laptop.storage.nvme } GB NVME</p>
                          }
                          </li>
                          <li>
                          {
                            (laptop.storage.ssd) ===0 ? 
                              <p>No SSD</p>: 
                              (laptop.storage.ssd>=1000) ?
                                <p>{laptop.storage.ssd /1000.0} TB SSD</p>:
                                <p>{laptop.storage.ssd } GB SSD</p>
                          }
                          </li>
                          <li>
                          {
                            (laptop.storage.hdd) ===0 ? 
                              <p>No HDD</p>: 
                              (laptop.storage.hdd>=1000) ?
                                <p>{laptop.storage.hdd /1000.0} TB HDD</p>:
                                <p>{laptop.storage.hdd } GB HDD</p>
                          }
                          </li>
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
          {
            !(laptop.links.amazon ==="")
            ?<Nav.Link href={laptop.links.amazon}><Button variant="warning"><h2>Buy from Amazon</h2></Button></Nav.Link>
            : <p className ="text-danger">amazon link unavailable</p>
          }	
          {
            !(laptop.links.newegg ==="")
            ?<Nav.Link href={laptop.links.newegg}><Button variant="info"><h2>Buy from Newegg</h2></Button></Nav.Link>
            : <p className ="text-danger">newegg link unavailable</p>
          }				
          </Card.Body>
        </Accordion.Collapse>
        
        </Card>
        )})
      }
      </Accordion>

    </div>
  )
}

export default DisplayLaptop;
