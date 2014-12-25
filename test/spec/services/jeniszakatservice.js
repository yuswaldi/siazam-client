'use strict';

describe('Service: JenisZakatService', function () {

  // load the service's module
  beforeEach(module('siazamClientApp'));

  // instantiate service
  var JenisZakatService;
  beforeEach(inject(function (_JenisZakatService_) {
    JenisZakatService = _JenisZakatService_;
  }));

  it('should do something', function () {
    expect(!!JenisZakatService).toBe(true);
  });

});
