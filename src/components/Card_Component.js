import { Card, Button } from "react-bootstrap";
import React from "react";

class Card_Component extends React.Component {

    render() {
        const {movie} = this.props;
        return (
            <div className="card-compo">
                <div className="img">
                    <img src={movie.img_url}></img>
                </div>
                <Card style={{ width: '30rem' }} bg='dark' text='white'>
                    <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                    {movie.description}
                    </Card.Text>
                    <Button variant="danger">Favoutite</Button>
                </Card.Body>
                <Card.Footer>
                        Rating: {movie.users_rating}
                </Card.Footer>
                </Card>
            </div>
        
        );
    }
}


export default Card_Component;