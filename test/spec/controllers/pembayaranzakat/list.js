'use strict';

describe('Controller: PembayaranzakatListCtrl', function () {

  // load the controller's module
  beforeEach(module('siazamClientApp'));

  var PembayaranzakatListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PembayaranzakatListCtrl = $controller('PembayaranzakatListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
