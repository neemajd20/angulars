import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
/**
 * Configuration settings for the application.
 */
const ApplicationConfig = {
  // Your configuration settings here
};


  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)];
