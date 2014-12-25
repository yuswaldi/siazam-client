'use strict';

/**
 * @ngdoc overview
 * @name siazamClientApp
 * @description
 * # siazamClientApp
 *
 * Main module of the application.
 */
angular
  .module('siazamClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/jeniszakat/list', {
        templateUrl: 'views/jeniszakat/list.html',
        controller: 'JeniszakatListCtrl'
      })
      .when('/satuanzakat/list', {
        templateUrl: 'views/satuanzakat/list.html',
        controller: 'SatuanzakatListCtrl'
      })
      .when('/pembayaranzakat/list', {
        templateUrl: 'views/pembayaranzakat/list.html',
        controller: 'PembayaranzakatListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
