'use strict';

describe('Service: PembayaranZakatService', function () {

  // load the service's module
  beforeEach(module('siazamClientApp'));

  // instantiate service
  var PembayaranZakatService;
  beforeEach(inject(function (_PembayaranZakatService_) {
    PembayaranZakatService = _PembayaranZakatService_;
  }));

  it('should do something', function () {
    expect(!!PembayaranZakatService).toBe(true);
  });

});
