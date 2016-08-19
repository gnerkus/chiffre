define([
  'angular',
], function (angular) {
  'use strict';

  return ['$scope', 'ProfileService', function ($scope, ProfileService) {
    $scope.getName = function() {
      $scope.username = ProfileService.getName();
    };

    $scope.updateUserame = function() {
      ProfileService.setName($scope.username);
    };

    $scope.getName();
  }];
});
