import Accordion from 'react-bootstrap/Accordion';

function Movie(props) {


    console.log('movie component', props.movieData)


    return (
        <div>
            <Accordion>
                {props.movieData.map((v, i) => {
                    // console.log(v.title)
                    return (
                        <Accordion.Item key={i} eventKey={i}>
                            <Accordion.Header>{v.title}</Accordion.Header>
                            <Accordion.Body>
                                {v.description}
                                Release Date: {v.release}
                            </Accordion.Body>
                        </Accordion.Item>
                    )

                })
                }
            </Accordion>
        </div>
    );
}

export default Movie;