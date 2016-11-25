'use strict';

/**
 * @ngdoc function
 * @name 3rdDevEnvApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 3rdDevEnvApp
 */
angular.module('3rdDevEnvApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'E2E',
      'protractor'
    ];
  });
