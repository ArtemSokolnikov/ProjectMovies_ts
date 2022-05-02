import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';
import { Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addFavourites, changeMovie, removeFavourites, setLike } from "../../actions/userActions";
import { PropsMovieCard } from "../../types";
import { details } from "../../utils/constants";
import { MovieCardContainer } from "./styles/MovieCardStyles";

const MovieCard = ({ movie }: PropsMovieCard) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const image = `https://image.tmdb.org/t/p/w300/${movie!.backdrop_path}`;
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const like = movie.likes ? movie.likes : false;
    const [checked, setChecked] = React.useState(like);
   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (checked===true) {                   
            setChecked(false);
            dispatch(removeFavourites(movie));
            dispatch(setLike(movie.title!, false));
        } else {
            setChecked(true);
            dispatch(setLike(movie.title!, true));
            dispatch(addFavourites(movie));
        }
    };
    
    return (
        
        <MovieCardContainer>
            <Col onClick={() => {
                history.push(details);
                dispatch(changeMovie(movie!));
            }}>
                <Card>
                    <Card.Img variant="bottom" src={image} alt='Card image' className='image' />
                    <Card.Body>
                        <Card.Title>{movie!.title}</Card.Title>
                        <Card.Text>
                            {movie!.overview!.toString().substring(0, 65).concat('...')}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }} />
            <Button sx={{ boxShadow: 0, color: 'black' }} onClick={() => {
                history.push(details);
                dispatch(changeMovie(movie!));
            }} variant="text">Buy tickets</Button>
        </MovieCardContainer>
    )
}

export default MovieCard;