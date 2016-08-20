define([
  'angular',
  'app.config',
  // Load calculator module
  './calc/calc.controller',
  // Load profile module
  './profile/profile.controller',
  './profile/profile.service',
  // Load settings module
  './settings/settings.service',
  './settings/settings.controller',
], function(angular, config, calcCtrl, profCtrl, profSvc, setSvc, setCtrl) {
  'use strict';

  // Main module of the application
  return angular
          .module('chiffre', [
            'ui.router', 'ngAnimate'
          ])
          .config(config)
          .controller('CalcController', calcCtrl)
          .controller('ProfileController', profCtrl)
          .controller('SettingsController', setCtrl)
          .factory('ProfileService', profSvc)
          .factory('SettingsService', setSvc);
});
