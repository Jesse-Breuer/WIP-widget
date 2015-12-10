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
          $scope.filteredCases = $filter("filter")(res.data, {categoryId: $routeParams.categoryId});
          $scope.routeCategoryId = $routeParams.categoryId;
          console.log('rc = ' + $scope.routeCategoryId);
        })
  });
