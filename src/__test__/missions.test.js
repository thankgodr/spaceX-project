import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

jest.mock('axios');

describe('missions test', () => {
  test('should render a mission component', () => {
    render(
      <Provider store={store}>
        <Missions/>
    </Provider>,
    );
    expect(screen.getByText('Mission')).toBeInTheDocument();
  });
});
