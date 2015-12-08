'use strict';

/**
 * @ngdoc function
 * @name wipApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the wipApp
 */
angular.module('wipApp')
  .controller('CategoryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
