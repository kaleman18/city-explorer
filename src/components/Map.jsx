/* eslint-disable react/prop-types */
import React from "react";
import { When } from 'react-if';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

const API_KEY = import.meta.env.VITE_API_KEY;

function Map(props) {

    return (
        <When condition={props.latitude && props.longitude}>
            <Card className='card' style={{ width: '40rem' }}>
                <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.latitude},${props.longitude}&size=400x300&format=png`} />
                <Card.Body>
                    <Card.Title>{props.City}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Here is your Latitude: {props.latitude}</ListGroup.Item>
                    <ListGroup.Item>Here is your Longitude: {props.longitude}</ListGroup.Item>
                </ListGroup>
            </Card>
        </When>
    )
}
export default Map;