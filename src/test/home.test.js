import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import store from '../redux/configureStore';

describe('test pages snapshot', () => {
  test('Test home snapshot', () => {
    const home = renderer.create(
            <Provider store={store}>
                <Home />
            </Provider>,
    ).toJSON();
    expect(home).toMatchSnapshot();
  });

  test('Test Profile snapshot', () => {
    const profile = renderer.create(
            <Provider store={store}>
                <Profile/>
            </Provider>,
    ).toJSON();
    expect(profile).toMatchSnapshot();
  });
});