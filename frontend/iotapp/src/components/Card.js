import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Card1(props) {

    return (
        <Row xs={1} md={4} className="g-4">
            {Array.from({ length: 12 }).map((_, idx) => (
                <Col key={idx}>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{props.pathContext_}</Card.Title>
                            <Card.Text>Mesure{idx}</Card.Text>
                            <Card.Text>Mesure{idx}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}
export default Card1;