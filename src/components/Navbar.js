import { Navbar, Form, Button, Container, FormControl } from "react-bootstrap";

function Navbar_Component() {
    return (
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand href="#">Movies</Navbar.Brand>
            <Form className="d-flex" >
            <FormControl type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="danger">Search</Button>
        </Form>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navbar_Component;