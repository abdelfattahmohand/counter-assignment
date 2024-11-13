// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here

  // Ignore, we have to call render inside each test instead to avoide unexpected behavior
})

test('renders counter message', () => {
  render(<Counter />);

  // Complete the unit test below based on the objective in the line above
  const counterMsg = screen.getByText(/Counter/i);
  expect(counterMsg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);

  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  render(<Counter />);

  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  const incrementBtn = screen.getByText('+');
  fireEvent.click(incrementBtn);
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  render(<Counter />);

  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  const decrementBtn = screen.getByText('-');
  fireEvent.click(decrementBtn);
  expect(count).toHaveTextContent('-1');
});
