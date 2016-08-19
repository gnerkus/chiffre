define([
  'angular',
  'app.config',
  // Load controllers
  './calc/calc.controller',
  './profile/profile.controller',
  // Load services
  './profile/profile.service'
], function(angular, config, calcCtrl, profileCtrl, profileService) {
  'use strict';

  // Main module of the application
  return angular
          .module('chiffre', [
            'ui.router', 'ngAnimate'
          ])
          .config(config)
          .controller('CalcController', calcCtrl)
          .controller('ProfileController', profileCtrl)
          .factory('ProfileService', profileService);
});
