import { Navbar,Container,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const NavMovie=()=>{
    return(
        <div>
            
              <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">MovieNet</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='Movies'>Movies</Nav.Link>
                    <Nav.Link as={Link} to='Contact'>Contact</Nav.Link>
                    <Nav.Link as={Link} to='SignIn'>Sign In</Nav.Link>

                    </Nav>
                    </Container>
                </Navbar>
        </div>
    )
}

export default NavMovie