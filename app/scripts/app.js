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
    'ngTouch',
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
      .when('/expanded/:caseId', {
        templateUrl: 'views/expanded.html',
        controller: 'ExpandedCtrl'
      })
      .when('/case/:caseId', {
        templateUrl: 'views/case.html',
        controller: 'CaseCtrl'
      })
      .when('/notify/:caseId', {
        templateUrl: 'views/notify.html',
        controller: 'NotifyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
