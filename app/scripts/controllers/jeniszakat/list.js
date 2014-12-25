'use strict';

/**
 * @ngdoc function
 * @name siazamClientApp.controller:JeniszakatListCtrl
 * @description
 * # JeniszakatListCtrl
 * Controller of the siazamClientApp
 */
angular.module('siazamClientApp')
        .controller('JeniszakatListCtrl', function ($scope, JenisZakatService) {
            $scope.jenisZakats = JenisZakatService.query();
            $scope.edit = function (x) {
                $scope.selectedJenisZakat = JenisZakatService.get({id: x.id}, function (hasil) {
                    $scope.original = angular.copy(hasil);
                });
            };

            $scope.save = function () {
                JenisZakatService.save($scope.selectedJenisZakat).success(function () {
                    $scope.jenisZakats = JenisZakatService.query();
                    $scope.baru();
                });
            };

            $scope.baru = function () {
                $scope.selectedJenisZakat = null;
                $scope.original = null;
            };

            $scope.hapus = function (x) {
                JenisZakatService.remove(x).success(function () {
                    $scope.jenisZakats = JenisZakatService.query();
                    $scope.baru();
                })
            }
        });
