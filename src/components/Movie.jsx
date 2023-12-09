/* eslint-disable react/prop-types */
import Accordion from 'react-bootstrap/Accordion';

function Movie(props) {


    console.log('movie component', props.movieData)


    return (
        <div>

            {props.movieData.map((v, i) => {
                return (
                    <Accordion key={i}>
                        <Accordion.Item  eventKey={i}>
                            <Accordion.Header>{v.title}</Accordion.Header>
                            <Accordion.Body>
                                {v.description}
                                Release Date: {v.release}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )
            })
            }

        </div>
    );
}

export default Movie;