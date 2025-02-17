import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '../Login';
import '@testing-library/jest-dom';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { User, NextOrObserver } from 'firebase/auth';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import fs from "fs";
import path from "path";

// Mock de Firebase
vi.mock('../firebase', () => ({
  auth: {
    onAuthStateChanged: vi.fn((callback: NextOrObserver<User | null>) => {
      if (typeof callback === 'function') {
        callback(null); // Simula que no hay usuario autenticado inicialmente
      }
      return vi.fn(); // Devuelve una función de limpieza
    }),
    currentUser: null,
  },
  GoogleAuthProvider: vi.fn(),
  GithubAuthProvider: vi.fn(),
  signInWithPopup: vi.fn(),
}));

describe('Login Component', () => {
  

  test("Debe renderizar el ícono y tener la clase animate-pulse", () => {
    const mockOnLogin = vi.fn();
    render(<Login onLogin={mockOnLogin} />);

    // Busca el icono en el DOM
    const iconElement = screen.getByTestId("login-icon");

    // Verifica que el icono está en el documento
    expect(iconElement).toBeInTheDocument();

    // Verifica que el icono tiene la clase animate-pulse
    expect(iconElement).toHaveClass("animate-pulse");
  });

  
});