// src/app/app.config.ts
/**
 *  Configuration settings for the application, including the login page.
 * Contains global settings such as the API URL and titles. 
 */

 const appConfig = {
  login: {
    title: 'Login to Your Account',
    usernamePlaceholder: 'Enter your username',
    passwordPlaceholder: 'Enter your password',
    loginButtonText: 'Login',
    // Add any other login-specific configurations here
  },
  apiUrl: 'https://api.example.com', // Example API URL for authentication
  appTitle: 'My Angular App',
  // Other global configurations
};
