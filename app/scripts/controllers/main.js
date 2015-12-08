'use strict';

/**
 * @ngdoc function
 * @name wipApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wipApp
 */
angular.module('wipApp')
  .controller('MainCtrl', function ($scope) {
    $scope.cases = [{  
   "firstname":"John",
   "lastname":"smith",
   "category":"Account Maintenance",
   "status":"Work in Progress"
}, 
{  
   "firstname":"Mary",
   "lastname":"smith",
   "category":"Account Maintenance",
   "status":"Work in Progress"
}, 
{  
   "firstname":"Dave",
   "lastname":"smith",
   "category":"Account Maintenance",
   "status":"Work in Progress"
},
{  
   "firstname":"Mary Follow",
   "lastname":"smith",
   "category":"Account Maintenance",
   "status":"Followup Required"
}, 
{  
   "firstname":"Dave Follow",
   "lastname":"smith",
   "category":"Account Maintenance",
   "status":"Followup Required"
}];
  });
