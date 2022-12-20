import {
  Container, Row, Col, ListGroup,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Profile = () => {
  const state = useSelector((state) => state.rockets);
  return (
        <Container>
            <Row>
                <Col md={6}>
                </Col>
                <Col md={6}>
                    <h3>My Rockets</h3>
                    <ListGroup>
                        {state.filter((rockets) => rockets.reserved).map((rocket) => <ListGroup.Item key={rocket.id} className="p-3 text-left">{rocket.name}</ListGroup.Item>)}
                    </ListGroup>
                </Col>

            </Row>
        </Container>

  );
};
export default Profile;