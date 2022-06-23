import { Form,Button} from "react-bootstrap"

const SignIn=()=>{
    return(
        <Form style={{marginLeft: '50px'}}>
        <Form.Text className="text-muted">
                <h2 style={{color :'blue' , marginLeft: '250px'}}>Sign In to MovieNet</h2>
        </Form.Text>

         <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email </Form.Label>
         <Form.Control type="email" placeholder="Enter email" style={{width:'550px',height:'35px'}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder=" Enter Password" style={{width:'550px',height:'35px'}}/>
        <Form.Text className="text-muted">
        <h6 style={{color :'blue', marginLeft: '10px', textDecoration: 'underline'}}> Forgot Password</h6>
        </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
         Sign In
        </Button>
        <br/>
        <Form.Text className="text-muted">
            <br/>
         <h5 style={{color :'blue', marginLeft: '10px', textDecoration: 'underline'}}>Create a new MovieNet account</h5>
        </Form.Text>
      </Form>
    )
}
export default SignIn