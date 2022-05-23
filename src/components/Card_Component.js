import { Card, Button } from "react-bootstrap";
import { add_favourite, remove_favourite } from "../actions";
import React from "react";

class Card_Component extends React.Component {

   

    handleFavouriteClick = () => {
        const {movie} = this.props;
        this.props.dispatch(add_favourite(movie))
    }

    handleUnFavouriteClick = () => {
        const {movie} = this.props;
        this.props.dispatch(remove_favourite(movie))
    }

    render() {
        
        const {movie, isFav} = this.props;
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

                    {
                        isFav 
                        ? <Button variant="info" onClick= {this.handleUnFavouriteClick}>Unfavoutite</Button>
                        : <Button variant="danger" onClick= {this.handleFavouriteClick}>Favoutite</Button>
                    }
                    
                    
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