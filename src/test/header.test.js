import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';

describe('Tesing the Header Component', () => {
  test('Test The header render correctly', () => {
    const header = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    ).toJSON();
    expect(header).toMatchSnapshot();
  });

  test('navs are 3', () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const nav = container.getElementsByClassName('nav-link');
    expect(nav.length).toBe(3);
  });

  test('navs are clickable', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    userEvent.click(screen.getByText('Rockets'));
    expect(screen.getByText('Rockets')).toHaveClass('active');
  });
});