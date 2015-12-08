'use strict';

/**
 * @ngdoc function
 * @name wipApp.controller:CaseCtrl
 * @description
 * # CaseCtrl
 * Controller of the wipApp
 */
angular.module('wipApp')
  .controller('CaseCtrl', function ($scope, $routeParams, $http, $filter) {
    //$scope.caseId = $routeParams.caseId;

    $http.get('/data/cases.json')
       .then(function(res){
          $scope.case = $filter("filter")(res.data, {caseId: $routeParams.caseId})[0];
        })

  });
