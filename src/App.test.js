import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the setup screen with the game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/El Impostor/i);
  expect(titleElement).toBeInTheDocument();
});

test('requires at least 3 players to start', () => {
  render(<App />);
  const startButton = screen.getByText(/Iniciar Juego/i);
  startButton.click();
  const errorMessage = screen.getByText(/al menos 3 jugadores/i);
  expect(errorMessage).toBeInTheDocument();
});
