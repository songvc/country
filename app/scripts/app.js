'use strict';

/**
 * @ngdoc overview
 * @name countryApp
 * @description
 * # countryApp
 *
 * Main module of the application.
 */
angular
  .module('countryApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'countryAppViews'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
