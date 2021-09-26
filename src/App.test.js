import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Air Quality App/i);
  expect(linkElement).toBeInTheDocument();
});
