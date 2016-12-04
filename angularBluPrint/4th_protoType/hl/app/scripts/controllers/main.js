'use strict';

/**
 * @ngdoc function
 * @name hlApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hlApp
 */
angular.module('hlApp')
  .controller('MainCtrl', function ($scope) {
    var baseURL = 'http://lorempixel.com/960/450/';
    $scope.setInterval = 5000;
    $scope.slides = [
      {
        title : "7 Ways to stay Fit",
        image : baseURL + 'sports/',
        text  : "Play a sport for 30 minutes a day!"
      },
      {
        title : "Healthly Food",
        image : baseURL + 'food/',
        text  : "Food that you should be eating!"
      },
      {
        title : "Relaxing Holidays",
        image : baseURL + 'nature/',
        text  : '10 Locations for Nature Lovers!'
      }
    ];

    var baseURL = "http://lorempixel.com/200/200/";
    $scope.content = [
      {
        title    : "About us",
        img      : baseURL + '/people',
        summery  : "We are good, we are the best there"
      },
      {
        title    : "Our Services",
        img      : baseURL + '/business',
        summery  : "Food that you should be eating!"
      },
      {
        title    : "Contact Us",
        img      : baseURL + '/transport',
        summery  : '#111, Good Health Blvd, Happy Place, Antartica, Zip-432167'
      }
    ];
});
