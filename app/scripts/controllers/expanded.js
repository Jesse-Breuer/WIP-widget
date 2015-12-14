'use strict';

/**
 * @ngdoc function
 * @name wipApp.controller:ExpandedCtrl
 * @description
 * # ExpandedCtrl
 * Controller of the wipApp
 */
angular.module('wipApp')
  .controller('ExpandedCtrl', function ($scope, $routeParams, $http, $filter) {


  $http.get('/data/cases.json')
       .then(function(res){
          $scope.cases = res.data
           $scope.case = $filter("filter")(res.data, {casenumber: $routeParams.casenumber})[0];
        })

  });
