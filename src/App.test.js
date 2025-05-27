import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders logo image', () => {
  render(<App />);
  const logoImg = screen.getByAltText(/logo/i);
  expect(logoImg).toBeInTheDocument();
});

test('renders all CLICK ME buttons', () => {
  render(<App />);
  const buttons = screen.getAllByText(/click me/i);
  expect(buttons.length).toBe(4);
});

test('renders simple React application text', () => {
  render(<App />);
  expect(screen.getByText(/this is a simple react application/i)).toBeInTheDocument();
});


test('renders multiple simple addition texts', () => {
  render(<App />);
  const additionTexts = screen.getAllByText(/this is a simple addition to the original code/i);
  expect(additionTexts.length).toBe(2);
});

