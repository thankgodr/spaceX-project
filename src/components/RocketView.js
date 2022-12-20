import PropTypes from 'prop-types';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { RESERVE_ROCKET, CANCEL_RESERVATION, reserveAction } from '../redux/slice/rockets/rockets';

const RocketView = (props) => {
  const dispatch = useDispatch();
  const acionParam = (id, action) => ({
    type: action,
    id,
  });
  return (
        <Row style={{ marginBottom: '25px' }}>
            <Col md={4}>
                <img src={props.image} className="rocket-image img-fluid" />
            </Col>
            <Col md={8} style={{ textAlign: 'left' }}>
                <h4 className="rocket-title">{props.title}</h4>
                <p>{props.description}</p>
                {
                    !props.reserved && <Button onClick={() => {
                      dispatch(reserveAction(acionParam(props.id, RESERVE_ROCKET)));
                    }
                    }>Reservation</Button>
                }

                {
                    props.reserved && <Button
                        onClick={() => {
                          dispatch(reserveAction(acionParam(props.id, CANCEL_RESERVATION)));
                        }
                        }
                        variant="secondary"
                    >Cancel Reservation</Button>
                }

            </Col>
        </Row>
  );
};

RocketView.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketView;