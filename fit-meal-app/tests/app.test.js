import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders a header', () => {
  render(<App />);
  const headerElement = screen.getByText(/header/i);
  expect(headerElement).toBeInTheDocument();
});
