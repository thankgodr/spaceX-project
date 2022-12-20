import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import RocketView from '../components/RocketView';

const Home = () => {
  const state = useSelector((state) => state.rockets);
  return (
        <Container className='mt-2'>
            {state.map((rocket) => <RocketView
                image={rocket.flickr_images[0]}
                id={rocket.id}
                title={rocket.name}
                description={rocket.description}
                key={rocket.id}
                reserved={rocket.reserved}
            />)}
        </Container>
  );
};

export default Home;