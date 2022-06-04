import React from 'react';
import {handleSearchMovie, add_movie_to_list} from '../actions'
import { Navbar, Form, Button, Container, FormControl, Card } from "react-bootstrap";

class Navbar_Component extends React.Component {

    constructor(props) {
        super(props);
        
    }

    handleSearch = () => {
        const {searchText} = this.state;
        this.props.dispatch(handleSearchMovie(searchText))

    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        });
    }

    addMovie = () => {
        const {result} = this.props.search; 
        this.props.dispatch(add_movie_to_list(result));
    }


    render() {
        const {result, showSearch} = this.props.search;

        return (
            <div className="nav-main">
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             
                <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand href="#">Movies</Navbar.Brand>
               
                    <Form className="d-flex">
                        <FormControl type="search" onChange={this.handleChange}
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="danger" onClick={this.handleSearch}>Search</Button>
                    </Form>
                   
                
                </Navbar.Collapse>
                </Container>
          </Navbar>
          {showSearch && 
          <div className="card-cover">
          
               <Card style={{width: '25rem', alignItems: 'center'}}>
                <Card.Img variant="top" style={{height: '50%', width: '30%'}}src={result.Poster} />
                <Card.Body>
                    <Card.Title style={{fontSize: '1rem'}}>{result.Title}</Card.Title>
                    <Card.Text style={{fontSize: '1rem'}}>
                    {result.Plot}
                    </Card.Text>
                    <Button variant="primary" onClick={this.addMovie}>ADD MOVIE</Button>
                </Card.Body>
                </Card> 
                </div> }
            </div>
            
           
        )
    }
}

export default Navbar_Component;