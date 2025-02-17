import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // 👈 IMPORTANTE

import App from '../../App';

describe('App Component', () => {
  it('should render the login page initially', () => {
    render(<App />);
    
    expect(screen.getByText(/Inicia sesión para continuar/i)).toBeInTheDocument();
    expect(screen.getByText(/Iniciar con Google/i)).toBeInTheDocument();
    expect(screen.getByText(/Iniciar con GitHub/i)).toBeInTheDocument();
  });
  
});
