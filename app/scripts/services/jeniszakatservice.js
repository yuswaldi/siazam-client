'use strict';

/**
 * @ngdoc service
 * @name siazamClientApp.JenisZakatService
 * @description
 * # JenisZakatService
 * Factory in the siazamClientApp.
 */
angular.module('siazamClientApp')
        .factory('JenisZakatService', function ($resource, $http) {
            // Service logic
            // ...

//    var meaningOfLife = 42;

            // Public API here
            return {
//      someMethod: function () {
//        return meaningOfLife;
//      }
                jenisZakatResource: $resource('api/jeniszakat/:id'),
                get: function (param, callback) {
                    return this.jenisZakatResource.get(param, callback)
                },
                query: function () {
                    return this.jenisZakatResource.query();
                },
                save: function (data) {
                    if (data.id == null) {
                        return $http.post('api/jeniszakat', data);
                    } else {
                        return $http.put('api/jeniszakat/' + data.id, data);
                    }
                },
                remove: function (data) {
                    if (data.id != null) {
                        return $http.delete('api/jeniszakat/' + data.id);
                    }
                }
            };
        });
