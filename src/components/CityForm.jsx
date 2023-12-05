/* eslint-disable react/prop-types */
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CityForm(props) {

    const [typedInCity, setTypedInCity] = useState('');

    

    function handleChange(e){
        setTypedInCity(e.target.value)
        console.log(typedInCity)
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(typedInCity);
        props.changeCity(typedInCity);
    }

  return (
    <Form onSubmit= {handleSubmit}>
      <Form.Group className="textbox" controlId="exampleForm.ControlTextarea1">
        <Form.Label ></Form.Label>
        <Form.Control type="text" placeholder="Enter Any City!" onChange = {handleChange} />
      </Form.Group>
      <Button variant="success" type='submit'> Explore </Button>{' '}
    </Form>
  );
}

export default CityForm;