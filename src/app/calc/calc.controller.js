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
  }];
});
