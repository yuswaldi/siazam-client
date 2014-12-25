'use strict';

/**
 * @ngdoc function
 * @name siazamClientApp.controller:PembayaranzakatListCtrl
 * @description
 * # PembayaranzakatListCtrl
 * Controller of the siazamClientApp
 */
angular.module('siazamClientApp')
        .controller('PembayaranzakatListCtrl', function ($scope, PembayaranZakatService) {
            $scope.awesomeThings = [
                'HTML5 Boilerplate',
                'AngularJS',
                'Karma'
            ];
            $scope.pembayaranZakats = PembayaranZakatService.query();
        });
