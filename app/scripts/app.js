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
    // 'ngTouch',
    'ngMaterial',
    'angular.filter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/category/:categoryId', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/case/:casenumber', {
        templateUrl: 'views/case.html',
        controller: 'CaseCtrl'
      })
      .when('/notify/:casenumber', {
        templateUrl: 'views/notify.html',
        controller: 'NotifyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
