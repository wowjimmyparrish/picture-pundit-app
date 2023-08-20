import React from "react";
import Review from "./Review";
import { Container, Row, Col, Image } from 'react-bootstrap';
import AddReview from "./AddReview";

function MovieCard({ movie, addReview }) {

return (
  <Container>
    <Row className="mt-5">
      <Col>
        <h1>{movie.name}</h1>
      </Col>
    </Row>
    <Row className="mt-3">
      <Col md={4}>
        <h4>Genre: {movie.genre}</h4>
      </Col>
      <Col md={4}>
        <h4>Year: {movie.year}</h4>
      </Col>
      <Col md={4}>
        <h4>Director: {movie.director}</h4>
      </Col>
    </Row>
    <Row className="mt-3 w-75 h-50">
      <Col>
        <Image src={movie.image_file} alt={movie.name} fluid />
      </Col>
    </Row>
    
    <Row className="mt-4">
    <Col md={6}>
        <h2>Add a Review</h2>
        <AddReview addReview={addReview} movie={movie} />
      </Col>
      <Col md={6}>
        <Review reviews={movie.reviews} />
      </Col>
      
    </Row>
  </Container>
);
}









export default MovieCard;