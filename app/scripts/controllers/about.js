'use strict';

/**
 * @ngdoc function
 * @name wipApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wipApp
 */
angular.module('wipApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
