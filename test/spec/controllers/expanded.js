'use strict';

describe('Controller: ExpandedCtrl', function () {

  // load the controller's module
  beforeEach(module('wipApp'));

  var ExpandedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpandedCtrl = $controller('ExpandedCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
