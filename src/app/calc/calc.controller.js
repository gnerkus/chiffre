define([
  'angular',
], function (angular) {
  'use strict';

  return ['$scope', 'ProfileService', function ($scope, ProfileService) {
    $scope.getName = function() {
      $scope.username = ProfileService.getName();
    };

    $scope.setName = function(username) {
      ProfileService.setName(username);
    };

    // Fetch the default username
    $scope.getName();

    /* Input sum variables */
    // A variable to hold the last sum computed
    var currentSum = null;
    $scope.computeSum = function() {
      $scope.numberSum = $scope.firstNum + $scope.secondNum + $scope.thirdNum;
      // Store the current sum
      currentSum = $scope.numberSum;
    };

    $scope.computeQuotient = function() {
      var perDiff = $scope.numberSum / currentSum;
      $scope.firstNum *= perDiff;
      $scope.secondNum *= perDiff;
      $scope.thirdNum *= perDiff;
      currentSum = $scope.numberSum;
    }
  }];
});
