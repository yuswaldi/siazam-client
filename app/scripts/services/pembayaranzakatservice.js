'use strict';

/**
 * @ngdoc service
 * @name siazamClientApp.PembayaranZakatService
 * @description
 * # PembayaranZakatService
 * Factory in the siazamClientApp.
 */
angular.module('siazamClientApp')
  .factory('PembayaranZakatService', function ($resource, $http) {
    // Service logic
    // ...

//    var meaningOfLife = 42;

    // Public API here
    return {
//      someMethod: function () {
//        return meaningOfLife;
//      }
        pembayaranZakatResource: $resource('api/pembayaranzakat/:id'),
        get: function (param, callback) {
            return this.pembayaranZakatResource.get(param, callback)
        },
        
        query: function () {
            return this.pembayaranZakatResource.query();
        }
        
    };
  });
