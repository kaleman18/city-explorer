/* eslint-disable react/prop-types */
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { When } from 'react-if';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function Weather(props) {
    console.log(props)

    return (
        // <Carousel>
        //     <Carousel.Item>
        //         <ExampleCarouselImage text="First slide" />
        //         <Carousel.Caption>
        //             <h3>First slide label</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <ExampleCarouselImage text="Second slide" />
        //         <Carousel.Caption>
        //             <h3>Second slide label</h3>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <CarouselImage text="Third slide" />
        //         <Carousel.Caption>
        //             <h3>Third slide label</h3>
        //             <p>
        //                 Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        //             </p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
        <When condition={props.dayOne && props.dayTwo && props.dayThree}>
            <Card className="movieCard" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Weather for Today</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Date: {props.dayOne.valid_date}</Card.Subtitle>
                    <Card.Text className="cardtext">
                        {props.dayOne.weather.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="movieCard" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Weather for Tomorrow</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Date: {props.dayTwo.valid_date}</Card.Subtitle>
                    <Card.Text className="cardtext">
                        {props.dayTwo.weather.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="movieCard" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Tomorrow +1</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Date: {props.dayThree.valid_date}</Card.Subtitle>
                    <Card.Text className="cardtext">
                        {props.dayThree.weather.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </When>
    );
}

export default Weather;