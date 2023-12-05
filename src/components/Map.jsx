/* eslint-disable react/prop-types */
import React from "react";
import {When} from 'react-if';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

const API_KEY = import.meta.env.VITE_API_KEY;

function Map(props){


    return(
        <When condition={props.latitude && props.longitude}>
            <Card style={{ width: '18rem', border: '2px solid black'}}>
                <Card.Header>{props.City}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Here is your Latitude: {props.latitude}</ListGroup.Item>
                    <ListGroup.Item>Here is your Longitude: {props.longitude}</ListGroup.Item>
                    {/* <ListGroup.Item><Image>src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.latitude},${props.longitude}&size=400x300&format=png`}</Image></ListGroup.Item> */}
                </ListGroup>
            </Card> 
        </When>
    )
}

export default Map;