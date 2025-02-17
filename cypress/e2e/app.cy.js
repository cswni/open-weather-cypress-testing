import { mockWeather } from "./weather";
import { mockForecast } from "./forecast";

describe('App Component', () => {
  beforeEach(() => {
    // Mock geolocation API
    cy.window().then((win) => {
      cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((callback) => {
        return callback({
          coords: {
            latitude: 40.7128, // Example latitude (New York City)
            longitude: -74.006, // Example longitude (New York City)
          },
        });
      });
      });

    cy.visit('/');
  });

  afterEach(() => {
    //Remove the localStorage item
    window.localStorage.removeItem('googleLogged');
  })

  it('should render the login page initially', () => {
    cy.contains('Weather App').should('be.visible');
    cy.contains('Inicia sesión para continuar').should('be.visible');
    cy.contains('Iniciar con Google').should('be.visible');
    cy.contains('Iniciar con GitHub').should('be.visible');
  });

  

    it('should log in with Google and display the weather panel', () => {
      // Interceptar las solicitudes de la API después del login
      cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather*', {
        statusCode: 200,
        body: mockWeather,
      }).as('getWeather');

      cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/forecast*', {
        statusCode: 200,
        body: mockForecast,
      }).as('getForecast');
      
      // Llama al comando personalizado para iniciar sesión con Google
      cy.loginByGoogleApi();

      // Verifica que el panel del clima se muestre
      cy.contains('Predicción').should('be.visible');

      // Esperar a que la solicitud ocurra después del login
      cy.wait('@getWeather', { timeout: 50000 });
      cy.wait('@getForecast', { timeout: 50000 });

      // Verificar que la UI se actualiza correctamente
      cy.contains('Managua Mock').should('be.visible');
      cy.contains('algo de nubes').should('be.visible');
      cy.contains('24.7').should('be.visible');
      cy.contains('nubes dispersas').should('be.visible');
      cy.contains('nubes dispersas').should('be.visible');
    });
});
