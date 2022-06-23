import {Card} from "react-bootstrap"

const Contact=()=>{
    return(      
    <Card style={{ marginLeft: '250px', width: '80rem',height:'300px' }}>
      <Card.Body>
        <Card.Title>
            <h2 style={{color :'gris' , marginLeft: '450px'}}>Contact Us</h2>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
        <h5>Call Us</h5> 
          Phone: (216) 25454536
        <br/>
        <br/>
        <h5>Email Us</h5>
        <Card.Link href="#">MovieNet@go.com</Card.Link>
        </Card.Subtitle>
        <Card.Text>
          Advertising : Fill out <Card.Link href="#">our online proposal form</Card.Link> 
        </Card.Text>
      </Card.Body>
    </Card>
 
    )
}
export default Contact