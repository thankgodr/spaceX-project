import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import RocketView from '../components/RocketView';
import store from '../redux/configureStore';

describe('Test Rocketview', () => {
  test('Test rocketview omponent', () => {
    const componnent = renderer.create(
            <Provider store={store}>
                <RocketView image="http://" id={11} reserved={false} description="hhdhd" title="dum" >
                </RocketView>
            </Provider>,

    ).toJSON();
    expect(componnent).toMatchSnapshot();
  });
});