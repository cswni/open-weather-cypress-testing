import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import Card from '../Card';


vi.mock('../Spinner', () => ({
  default: () => <div>Loading...</div>,
}));

describe('Card Component', () => {
  const mockWeather = {
    city: { name: 'Test City' },
    list: [
      {
        main: {
          temp: 300,
          temp_max: 305,
          temp_min: 295,
          feels_like: 299,
          humidity: 80,
        },
        weather: [{ icon: '10d', description: 'rainy' }],
        wind: { speed: 5 },
      },
    ],
  };

  const mockForecast = {
    list: [
      { dt_txt: '2025-02-14 12:00:00', weather: [{ icon: '10d', description: 'rainy' }], main: { temp: 300 } },
      { dt_txt: '2025-02-14 15:00:00', weather: [{ icon: '10d', description: 'cloudy' }], main: { temp: 295 } },
      { dt_txt: '2025-02-14 18:00:00', weather: [{ icon: '10d', description: 'sunny' }], main: { temp: 290 } },
      { dt_txt: '2025-02-14 21:00:00', weather: [{ icon: '10d', description: 'clear' }], main: { temp: 285 } },
    ],
  };

  it('renders Spinner when loadingData is true', () => {
    render(<Card loadingData={true} showData={false} weather={null} forecast={null} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders "Sin Datos" when showData is false', () => {
    render(<Card loadingData={false} showData={false} weather={null} forecast={null} />);
    expect(screen.getByText('Sin Datos')).toBeInTheDocument();
  });

  
});