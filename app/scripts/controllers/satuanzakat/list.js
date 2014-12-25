'use strict';

/**
 * @ngdoc function
 * @name siazamClientApp.controller:SatuanzakatListCtrl
 * @description
 * # SatuanzakatListCtrl
 * Controller of the siazamClientApp
 */
angular.module('siazamClientApp')
        .controller('SatuanzakatListCtrl', function ($scope, SatuanZakatService) {
//    $scope.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
            $scope.satuanZakats = SatuanZakatService.query();
            $scope.edit = function(x) {
                $scope.selectedSatuanZakat = SatuanZakatService.get({id: x.id}, function (hasil) {
                    $scope.original = angular.copy(hasil);
                });
            };
            
            $scope.save = function() {
                SatuanZakatService.save($scope.selectedSatuanZakat).success(function() {
                    $scope.satuanZakats = SatuanZakatService.query();
                    $scope.baru();
                });
            };
            
            $scope.baru = function() {
                $scope.selectedSatuanZakat = null;
                $scope.original = null;
            };
            
            $scope.hapus = function(x) {
                SatuanZakatService.remove(x).success(function() {
                    $scope.satuanZakats = SatuanZakatService.query();
                    $scope.baru();
                });
            };
        });
