'use strict';

/**
 * @ngdoc function
 * @name wipApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the wipApp
 */
angular.module('wipApp')
  .controller('CategoryCtrl', function ($scope, $routeParams, $http, $filter) {
     $http.get('/data/cases.json')
       .then(function(res){
       	  $scope.cases = res.data;
          $scope.case = $filter("filter")(res.data, {caseId: $routeParams.categoryId})[0];
        })
  });
