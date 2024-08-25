import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
/**
 * Configuration settings for the application.
 */
 const appConfig = {
  apiUrl: 'https://api.example.com',
  appTitle: 'My Angular App',
  // other configurations
};
export { appConfig };

  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)];
