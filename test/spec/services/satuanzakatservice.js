'use strict';

describe('Service: SatuanZakatService', function () {

  // load the service's module
  beforeEach(module('siazamClientApp'));

  // instantiate service
  var SatuanZakatService;
  beforeEach(inject(function (_SatuanZakatService_) {
    SatuanZakatService = _SatuanZakatService_;
  }));

  it('should do something', function () {
    expect(!!SatuanZakatService).toBe(true);
  });

});
