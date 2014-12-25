'use strict';

/**
 * @ngdoc service
 * @name siazamClientApp.SatuanZakatService
 * @description
 * # SatuanZakatService
 * Factory in the siazamClientApp.
 */
angular.module('siazamClientApp')
        .factory('SatuanZakatService', function ($resource, $http) {
            // Service logic
            // ...

//    var meaningOfLife = 42;

            // Public API here
            return {
//      someMethod: function () {
//        return meaningOfLife;
                satuanZakatResource: $resource('api/satuanzakat/:id'),
                get: function (param, callback) {
                    return this.satuanZakatResource.get(param, callback);
                },
                
                query: function() {
                    return this.satuanZakatResource.query();
                },
                
                save: function(data) {
                    if (data.id == null) {
                        return $http.post('api/satuanzakat', data);
                    } else {
                        return $http.put('api/satuanzakat/' + data.id, data);
                    }
                },
                
                remove: function(data) {
                    if (data.id != null) {
                        return $http.delete('api/satuanzakat/' + data.id);
                    }
                }
            };
        });
