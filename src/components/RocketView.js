import PropTypes from 'prop-types';
import { Button, Col, Row } from 'react-bootstrap';

const RocketView = (props) => (
    <Row style={{ marginBottom: '25px' }}>
        <Col md={4}>
            <img src={props.image} className="rocket-image img-fluid" />
        </Col>
        <Col md={8} style={{ textAlign: 'left' }}>
            <h4 className="rocket-title">{props.title}</h4>
            <p>{props.description}</p>
            <Button>Reservation</Button>
        </Col>
    </Row>
);

RocketView.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default RocketView;