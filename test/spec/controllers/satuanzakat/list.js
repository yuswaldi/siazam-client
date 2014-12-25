'use strict';

describe('Controller: SatuanzakatListCtrl', function () {

  // load the controller's module
  beforeEach(module('siazamClientApp'));

  var SatuanzakatListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SatuanzakatListCtrl = $controller('SatuanzakatListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
