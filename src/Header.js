import { Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav_bar_wrapper">
                        <Link to="/add">Add Product</Link>
                        <Link to="/update">Update Product</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>

                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header