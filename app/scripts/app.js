'use strict';

/**
 * @ngdoc overview
 * @name wipApp
 * @description
 * # wipApp
 *
 * Main module of the application.
 */
angular
  .module('wipApp', [
    'ngAnimate',
    'ngCookies',
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
      .when('/category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/expanded', {
        templateUrl: 'views/expanded.html',
        controller: 'ExpandedCtrl'
      })
      .when('/case', {
        templateUrl: 'views/case.html',
        controller: 'CaseCtrl'
      })
      .when('/notify', {
        templateUrl: 'views/notify.html',
        controller: 'NotifyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
