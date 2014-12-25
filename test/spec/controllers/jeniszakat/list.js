'use strict';

describe('Controller: JeniszakatListCtrl', function () {

  // load the controller's module
  beforeEach(module('siazamClientApp'));

  var JeniszakatListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JeniszakatListCtrl = $controller('JeniszakatListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
