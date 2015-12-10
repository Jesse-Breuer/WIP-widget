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
  	function detail(id){console.log(id)};
     $http.get('/data/cases.json')
       .then(function(res){
       	  $scope.cases = res.data;
          $scope.filteredCases = $filter("filter")(res.data, {categoryId: $routeParams.categoryId});
          $scope.routeCategoryId = $routeParams.categoryId;
          //show detail template on click
          $scope.detail = function(id, index){
          	//toggle
          	$scope.selected ? $scope.selected = '' : $scope.selected = {value: index};
          	$scope.templateURL = 'partials/detail.html';
          };
        })
  });
