'use strict';

/**
 * @ngdoc function
 * @name wipApp.controller:NotifyCtrl
 * @description
 * # NotifyCtrl
 * Controller of the wipApp
 */
angular.module('wipApp')
  .controller('NotifyCtrl', function ($scope, $routeParams, $http, $filter) {
  
  $scope.caseId = $routeParams.caseId;
  $http.get('/data/cases.json')
       .then(function(res){
          $scope.cases = res.data
          $scope.case = $filter("filter")(res.data, {caseId: $routeParams.caseId})[0];
        })

  });
