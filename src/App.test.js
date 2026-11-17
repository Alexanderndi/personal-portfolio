import { render, screen } from '@testing-library/react';
import App from './App';
import WorkPage from './WorkPage';

test('renders the senior engineering portfolio', () => {
  render(<App />);
  expect(screen.getByText(/Systems that/i)).toBeInTheDocument();
  expect(screen.getByText(/Basketball Africa League digital experiences/i)).toBeInTheDocument();
  expect(screen.getByText(/founder-built digital front door/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Download PDF/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Bring the hard problem/i)).toBeInTheDocument();
});

test('renders the full work index', () => {
  render(<WorkPage />);
  expect(screen.getByRole('heading', { name: /Built for the long game/i })).toBeInTheDocument();
  expect(screen.getByText(/Work history/i)).toBeInTheDocument();
  expect(screen.getByText(/High-load transaction services/i)).toBeInTheDocument();
  expect(screen.getByText(/founder-built digital front door/i)).toBeInTheDocument();
});
