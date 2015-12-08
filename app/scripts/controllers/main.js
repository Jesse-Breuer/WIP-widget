'use strict';

/**
 * @ngdoc function
 * @name wipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wipApp
 */

 /*status ids: 1 = FollowUp, 2 = Work in Progress, 3 = completed */
 /*category ids: 1 = Account Maintenance, 2 = Cashiering, 3 = Compliance */
angular.module('wipApp')
  .controller('MainCtrl', function ($scope, $http) {
      $http.get('/data/cases.json')
       .then(function(res){
          $scope.cases = res.data

        })
  });
