define([
  'angular',
  'lodash'
], function (angular, lodash) {
  'use strict';

  return ['$scope', 'SettingsService', 'ProfileService', function ($scope, SettingsService, ProfileService) {
    console.info(ProfileService);
    console.info(ProfileService.getName());
    $scope.username = ProfileService.getName();
    $scope.settings = SettingsService.getSettings();

    // Sorting parameters
    $scope.sortParams = {
      category: false,
      priority: false,
    };

    // Sorting function
    $scope.sortSettings = function () {
      // Fetch the sort params that have been set
      var setParams = Object.keys($scope.sortParams).filter(function(key) {
        return $scope.sortParams[key];
      });
      $scope.settings = lodash.sortBy($scope.settings, setParams);
    };
  }];
});
